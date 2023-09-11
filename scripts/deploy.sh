#!/bin/bash

remote_server="catri.us"
remote_user="ec2-user"
remote_directory="/www"

commands=()
commands+=("cd '$remote_directory'")
commands+=("curl -O https://catrius-blog-2.s3.ap-southeast-1.amazonaws.com/build/index.html")
commands+=("sudo systemctl restart nginx")
commands+=("echo done")

for command in "${commands[@]}"; do
  joined_commands+=" $command &&"
done

joined_commands=${joined_commands%&&}

ssh_command="ssh '$remote_user@$remote_server'"
eval "$ssh_command '$joined_commands'"
