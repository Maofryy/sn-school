#!/usr/bin/env node
// Installe le kit d'un sujet (et, côté auteurs, sa suite cachée ou son corrigé) sur une instance.
// Une instance refuse les apps dont le scope porte le préfixe vendeur d'une autre instance : le script lit le
// préfixe de l'instance cible, copie les projets dans .deploiements/<préfixe>/ en remplaçant le préfixe des
// scopes, puis compile et installe depuis cette copie. Les fichiers du repo ne sont jamais modifiés.
//
// Usage : node scripts/deployer.mjs <ID sujet> [--auth <alias now-sdk>]              → installe le kit
//         node scripts/deployer.mjs <ID sujet> [--auth <alias>] --avec suite[,corrige] → correction (repo privé)
import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { basename, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const BUILD_DIRS = new Set(['node_modules', 'dist', 'target', '.now'])
const EXTRAS = { suite: join('cache', 'suite'), corrige: join('cache', 'corrige') }

const { subjectId, auth, extras } = parseArgs(process.argv.slice(2))
const subject = findSubject(subjectId)
const sourcePrefix = scopePrefix(join(subject, 'kit'))
const authArgs = auth ? ['-a', auth] : []
const targetPrefix = instancePrefix(join(subject, 'kit'))
console.log(`Sujet ${subjectId} : préfixe ${sourcePrefix} → ${targetPrefix}`)

// Sans --avec : le kit seul. Avec --avec : seulement les projets demandés, le kit étant déjà en place
// (en correction, on ne réinstalle pas le kit sur la PDI de l'apprenant).
const projects = extras.length ? extras.map((name) => EXTRAS[name]) : ['kit']
for (const project of projects) {
    const source = join(subject, project)
    if (!existsSync(source)) fail(`${relative(ROOT, source)} absent (la suite et le corrigé ne sont que dans le repo privé).`)
    const copy = join(ROOT, '.deploiements', targetPrefix, relative(ROOT, source))
    rmSync(copy, { recursive: true, force: true })
    cpSync(source, copy, { recursive: true, filter: (path) => !BUILD_DIRS.has(basename(path)) })
    for (const file of walk(copy)) {
        const text = readFileSync(file, 'utf8')
        const prefixed = text.replaceAll(`x_${sourcePrefix}_`, `x_${targetPrefix}_`)
        if (prefixed !== text) writeFileSync(file, prefixed)
    }
    console.log(`\n▶ ${relative(ROOT, source)}`)
    run(['build'], copy)
    run(['install', ...authArgs], copy)
    // 1re installation : les attributions de rôle du kit ne s'appliquent qu'une fois le rôle créé.
    if (project === 'kit') run(['install', ...authArgs], copy)
}
console.log(`\nInstallé (préfixe ${targetPrefix}). Suites ATF : « ${subjectId} – Public », et en correction`)
console.log(`« ${subjectId} – Cachée – Bloquants » / « ${subjectId} – Cachée – À discuter ».`)

function parseArgs(args) {
    const options = { subjectId: undefined, auth: undefined, extras: [] }
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--auth') options.auth = args[++i]
        else if (args[i] === '--avec') options.extras = args[++i].split(',')
        else options.subjectId = args[i]
    }
    if (!options.subjectId) fail('Usage : node scripts/deployer.mjs <ID sujet> [--auth <alias>] [--avec suite,corrige]')
    const unknown = options.extras.filter((name) => !EXTRAS[name])
    if (unknown.length) fail(`--avec accepte : ${Object.keys(EXTRAS).join(', ')} (reçu : ${unknown.join(', ')})`)
    return options
}

function findSubject(id) {
    const sujets = join(ROOT, 'sujets')
    for (const branch of readdirSync(sujets)) {
        for (const name of readdirSync(join(sujets, branch)))
            if (name === id || name.startsWith(`${id}-`)) return join(sujets, branch, name)
    }
    fail(`Sujet ${id} introuvable dans sujets/.`)
}

function scopePrefix(project) {
    const scope = JSON.parse(readFileSync(join(project, 'now.config.json'), 'utf8')).scope
    const match = /^x_([a-z0-9]+)_/.exec(scope)
    if (!match) fail(`Scope inattendu dans ${relative(ROOT, project)} : ${scope}`)
    return match[1]
}

function instancePrefix(cwd) {
    const out = execFileSync(
        'npx',
        ['now-sdk', 'query', 'sys_properties', '-q', 'name=glide.appcreator.company.code', '-f', 'value', '-o', 'json', ...authArgs],
        { cwd, encoding: 'utf8' }
    )
    const json = JSON.parse(out.slice(out.indexOf('{')))
    const prefix = json.records?.[0]?.value
    if (!json.ok || !prefix) fail(`Préfixe vendeur introuvable sur l'instance : ${out}`)
    return prefix
}

function run(args, cwd) {
    execFileSync('npx', ['now-sdk', ...args], { cwd, stdio: 'inherit' })
}

function walk(dir) {
    return readdirSync(dir).flatMap((name) => {
        const path = join(dir, name)
        return statSync(path).isDirectory() ? walk(path) : [path]
    })
}

function fail(message) {
    console.error(message)
    process.exit(1)
}
