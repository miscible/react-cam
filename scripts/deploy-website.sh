tmp_dir=/tmp/miscible.com

rm -rf $tmp_dir

git clone "git@github.com:miscible/react-cam.git" $tmp_dir
rm -rf "$tmp_dir/public/miscible-react-cam"

cd website

npm run build -- --output-path "$tmp_dir/public/miscible-react-cam" --output-public-path "/miscible-react-cam/"

cd $tmp_dir

git add -A
git commit \
  -m "Update miscible-react-cam website
https://travis-ci.org/$TRAVIS_REPO_SLUG/builds/$TRAVIS_BUILD_ID" \ 
  --author "Travis CI <travis@reacttraining.com>"
git push origin master