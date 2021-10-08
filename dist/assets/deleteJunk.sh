#locate this file to the root folder o junk files to be deleted

#Exiting if no file name was given
[[ $# -ne 1 ]] && { echo "Specify a filename to delete in all sub folders"; exit 1; }

#Deleting files matching input parameter
echo "Deleting all files named ${1} in current and sub-directories."
find . | grep -w "$1" | \
    while IFS= read LINE; do
        rm -v "$LINE"
    done
