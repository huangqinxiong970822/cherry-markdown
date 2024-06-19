/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env commonjs */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // 'targets': 'defaults, not ie < 10'
        // useBuiltIns: 'usage',
        // corejs: 3
      },
    ],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
  },
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      'prismjs',
      {
        languages: [
          'html',
          'xml',
          'svg',
          'mathml',
          'ssml',
          'atom',
          'rss',
          'css',
          'clike',
          'javascript',
          'js',
          'asciidoc',
          'adoc',
          'aspnet',
          'asm6502',
          'awk',
          'gawk',
          'bash',
          'sh',
          'shell',
          'batch',
          'c',
          'csharp',
          'cs',
          'dotnet',
          'cpp',
          'cmake',
          'css-extras',
          'csv',
          'dart',
          'django',
          'jinja2',
          'dns-zone-file',
          'dns-zone',
          'docker',
          'dockerfile',
          'ftl',
          'git',
          'linker-script',
          'ld',
          'go',
          'go-module',
          'go-mod',
          'gradle',
          'http',
          'ini',
          'java',
          'javadoc',
          'javadoclike',
          'javastacktrace',
          'jsdoc',
          'js-extras',
          'json',
          'webmanifest',
          'json5',
          'jsonp',
          'jsstacktrace',
          'js-templates',
          'latex',
          'tex',
          'context',
          'less',
          'makefile',
          'markdown',
          'md',
          'markup-templating',
          'matlab',
          'mermaid',
          'mongodb',
          'nasm',
          'nginx',
          'nsis',
          'objectivec',
          'objc',
          'perl',
          'php',
          'phpdoc',
          'php-extras',
          'plant-uml',
          'plantuml',
          'plsql',
          'powershell',
          'properties',
          'python',
          'py',
          'r',
          'jsx',
          'tsx',
          'regex',
          'ruby',
          'rb',
          'rust',
          'sas',
          'sass',
          'scss',
          'scala',
          'scheme',
          'shell-session',
          'sh-session',
          'shellsession',
          'smali',
          'splunk-spl',
          'sql',
          'swift',
          'systemd',
          'textile',
          'uri',
          'url',
          'vbnet',
          'vim',
          'visual-basic',
          'vb',
          'vba',
          'wasm',
          'wiki',
          'xml-doc',
          'yaml',
          'yml',
          'diff',
          'glsl',
          'graphql',
          'haml',
          'lua',
          'pascal',
          'protobuf',
          'typescript',
        ],
        plugins: [],
        css: false,
      },
    ],
  ],
};
