<!-- Remember to add the style for this particular plugin -->
<link rel='stylesheet' href='/nut/raw+boilerplate.fresh.css'>



# Boilerplate

This is a plugin example to allow you to copy/paste and modify the files for development. It has been created to allow developers to easily create a plugin, including myself. Example:

<div class="boilerplate">Boilerplate</div>



## info.json

This is the file that defines important, "meta" information about the plugin in the json format. It helps for discovering the plugin and building it with other files. Its format is:

    {
      "id": "boilerplate",
      "name": "Boilerplate",
      "install": "[included]",
      "version": "1",
      "picnic": "3",
      "partial": false,
      "dependencies": [
        "card/v2"
        ],
      "tests": [
        "test.html"
        ]
    }

Which includes:

| Field            | Function        |
|------------------|-----------------|
| **id**           | Unique identifier for the plugin. It defines the `/plugins/[id]` from the url and it should be the same as the plugin's folder name |
| **name**         | The name for which the people might recognize the plugin from the page `/plugins` |
| **install**      | The installing name. It should be the same as the id with an `+` prepending it, or [installed] if it's already in every Picnic CSS  |
| **version**      | [optional] The latest released version for the plugin and the default one. This will be used when the plugin is added without version specified |
| **picnic**       | [optional] Specifies the required picnic version. Ideally only major versions are required here, since minor ones are retrocompatible (working on it) |
| **partial**      | [optional] Define whether or not the plugin is complete or only there to base other classes on it. Partial plugins do not pollute the global namespace with classes nor modify elements directly |
| **dependencies** | [optional] Define on which other plugins this plugin depends and will include them acordingly if needed. You can specify a specific version, or none for the latest. It can be a file (string) or array of files (strings) |
| **test**    | [optional] Define where the tests for the current version reside. It can be a file (string) or array of files (strings) |


## documentation.md

It is this file you are reading. It normally includes second headers (h2) for each major change for the plugin. Read the plugin [button](/plugins/button) to see what I mean. The contents and order are there only as a recommendation, do as you please here:

- **Needed stylesheet** that is not included (required for plugins) to show the plugin. This is the first line of the file and looks like `<link rel='stylesheet' href='/nut/raw+boilerplate.fresh.css'>`
- **Title** as main header. Should be the same as in `info.json`'s `"name"`
- **Brief description** and example of the plugin to quickly show it.
- **Installation** method if it's not installed already
- **Examples with code** so others can replicate it easily.
- **Hack it**. A section with tips and hacks to deeply modify the plugin to adapt it to your needs. This is for programmers reading the source, so don't worry about being a bit too specific here.


## description.html

Quick description or example of the plugin. This should be really small as it will be in the page `/plugins` among many others.





## Hack it






