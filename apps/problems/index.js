const t = [
    {
        name: "c",
        keys: {
            "int": {
                convert: "parseInt(args[{index}])",
                equals: "int"
            },
            "string": {
                convert: "args[{index}]",
                equals: "char*"
            }
        }
    },
    {
        name: "javascript",
        keys: {
            "int": {
                convert: " process.argv[{index} + 2]",
                equals: "const"
            },
        }
    },
    {
        name: "java",
        keys: {
            "string": {
                convert: "args[{index}]",
                equals: "String"
            },
        }
    }
]

`${tracks.equals} ${veriableName} = ${tracks.convert.replace("{index}", index)}`

"const a = 1"