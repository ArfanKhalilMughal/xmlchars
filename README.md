# @zklogic/xmlchars

[![npm](https://img.shields.io/npm/v/@zklogic/xmlchars)](https://www.npmjs.com/package/@zklogic/xmlchars)
[![CI/CD](https://github.com/ArfanKhalilMughal/xmlchars/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ArfanKhalilMughal/xmlchars/actions/workflows/npm-publish.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Utilities for determining whether characters belong to character classes defined
by the XML specs.

> **Fork of [lddubeau/xmlchars](https://github.com/lddubeau/xmlchars)** by
> [Louis-Dominique Dubeau](https://github.com/lddubeau).
> Published to npm as [`@zklogic/xmlchars`](https://www.npmjs.com/package/@zklogic/xmlchars).
> Fork maintained by [Arfan Khalil Mughal](https://github.com/ArfanKhalilMughal).

---

## Installation

```bash
npm install @zklogic/xmlchars
```

---

## Organization

Different modules cover different standards:

| Module | Standard |
|---|---|
| `@zklogic/xmlchars/xml/1.0/ed5` | XML 1.0 edition 5 |
| `@zklogic/xmlchars/xml/1.0/ed4` | XML 1.0 edition 4 |
| `@zklogic/xmlchars/xml/1.1/ed2` | XML 1.1 edition 2 |
| `@zklogic/xmlchars/xmlns/1.0/ed3` | XML Namespaces 1.0 edition 3 |

---

## Features

Each module exposes:

1. **Fragments** — parts of regular expressions corresponding to productions
   defined in the standard. Use these to build your own regular expressions.

2. **Regular expressions** — ready-to-use regexes corresponding to productions.

3. **Lists** — arrays of characters corresponding to productions.

4. **Functions** — test code points to verify whether they fit a production.

---

## Usage

```typescript
import { isNameStartChar } from "@zklogic/xmlchars/xml/1.0/ed5";

console.log(isNameStartChar("a".codePointAt(0)!)); // true
console.log(isNameStartChar("1".codePointAt(0)!)); // false
```

---

## Changes in this Fork

- Package renamed to `@zklogic/xmlchars` (scoped npm package)
- Published automatically to npm on every `master` push via GitHub Actions
- CI updated to Node.js 18/20/22 LTS matrix

---

## Links

| | |
|---|---|
| **This fork (npm)** | https://www.npmjs.com/package/@zklogic/xmlchars |
| **This fork (GitHub)** | https://github.com/ArfanKhalilMughal/xmlchars |
| **Original package (npm)** | https://www.npmjs.com/package/xmlchars |
| **Original repository** | https://github.com/lddubeau/xmlchars |

---

## License

MIT — see [LICENSE](LICENSE).
