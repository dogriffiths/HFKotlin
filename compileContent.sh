#!/bin/bash
export SRC=src/content/cms
compileFile () {
    if [ "$1" != "content" ]
    then
        export DIR=$(basename $1)
        mkdir -p "$SRC"
        export TMP="stitch.json"
        : > $TMP
        for file in $1/*.md
        do
            m2j -c "$file" >> $TMP
        done
        cat $TMP | sed 's/}{/,/' > "$SRC/$DIR.json"
        rm $TMP
    fi    
}
export -f compileFile
find content -type d -exec bash -c 'compileFile "$0"' {} \;
