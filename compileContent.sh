#!/bin/bash
export SRC=src
compileFile () {
    export DEST=$SRC/$(echo "$1" | sed 's/.md$/.json/')
    mkdir -p $(dirname $DEST)
    m2j -c "$1" > $DEST
}
export -f compileFile
compileDir () {
    echo $1
    export DEST=$SRC/$1/index.js
    export EXPS=""
    cp "$DEST" "$SRC/$1/index2.js"
    : > "$DEST"
    for file in $1/*.md
    do
        if [ -e "$file" ]
        then
            export STUB=$(echo $(basename $file) | sed 's/.md$//')
            echo "import $STUB from './$STUB.json';" >> $DEST
            EXPS="$EXPS $STUB, "
        fi
    done
    if [ ! -z "$EXPS" ]
    then
        echo "export { $EXPS };" >> $DEST
        rm "$SRC/$1/index2.js"
    else
        rm "$DEST"
        mv "$SRC/$1/index2.js" "$DEST"
    fi    
}
export -f compileDir
find content -name '*.md' -exec bash -c 'compileFile "$0"' {} \;
find content -type d -exec bash -c 'compileDir "$0"' {} \;
