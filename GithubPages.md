To recommit new changes and push up to the remote repository:

1. On remote repository delete the "gh-pages" branch. 

2. npm run build 

3. git add dist -f 

4. git commit -m  

5. git subtree push --prefix dist origin gh-pages 