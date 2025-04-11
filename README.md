[![Actions Status](https://github.com/nikitazh12/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nikitazh12/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a1ebaa482a7f8905770e/maintainability)](https://codeclimate.com/github/nikitazh12/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a1ebaa482a7f8905770e/test_coverage)](https://codeclimate.com/github/nikitazh12/frontend-project-46/test_coverage)

# Вычислитель отличий 

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Примеры использования

- Вывод справочной информации по утилите выполняется следующей командой:

```console
  gendiff -h
```

[![asciicast](https://asciinema.org/a/5oYm2dD7fLzc5I9nFlB4zAVBI.svg)](https://asciinema.org/a/5oYm2dD7fLzc5I9nFlB4zAVBI)

- Сравнение двух файлов и вывод с использованием форматера **stylish**:

```console
  gendiff __fixtures__/file1.json __fixtures__/file2.json
```

 [![asciicast](https://asciinema.org/a/l4uimXcVODmO95YlcZ05TinR4.svg)](https://asciinema.org/a/l4uimXcVODmO95YlcZ05TinR4)

- Сравнение двух файлов и вывод с использованием форматера **plain text**:

```console
  gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/4ni9UxPaRIzUvz21cGyuqJGsy.svg)](https://asciinema.org/a/4ni9UxPaRIzUvz21cGyuqJGsy)

- Сравнение двух файлов и вывод с использованием форматера **json**:

```console
  gendiff --format json __fixtures__/file1.yml __fixtures__/file2.yaml
```

[![asciicast](https://asciinema.org/a/jc3sSg5hsjRHyVFrDrI3Keb21.svg)](https://asciinema.org/a/jc3sSg5hsjRHyVFrDrI3Keb21)


