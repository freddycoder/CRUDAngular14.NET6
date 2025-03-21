Write-Host "A script to update the angular version in the project"

$version = "19"

Write-Host "ng update preview"
ng update

Write-Host "Update the angular version $version"
ng update @angular/cdk@$version --force --allow-dirty
ng update @angular/cli@$version --force --allow-dirty
ng update @angular/core@$version --force --allow-dirty
ng update @angular/material@$version --force --allow-dirty
