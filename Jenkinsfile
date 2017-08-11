
node() {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

stage( 'Build') {
  sh 'docker run --name="myjob --rm -t --volumes-from="jenkins" -e GIT_COMMIT -e CI=true -e NPM_CONFIG_CACHE '
  + '-e BOWER_STORAGE__PACKAGES -e TNT_ARTIFACTORY_USER -e TNT_ARTIFACTORY_EMAIL -e TNT_ARTIFACTORY_PASSWORD_HASH ' +
  '-w "$WORKSPACE/$PROJECT_DIR" docker.tntdigital.io/tnt/node6:master npm prune'

}






    }
    catch (err) {

        currentBuild.result = "FAILURE"

            mail body: "project build error is here: ${env.BUILD_URL}" ,
            from: 'xxxx@yyyy.com',
            replyTo: 'yyyy@yyyy.com',
            subject: 'project build failed',
            to: 'zzzz@yyyyy.com'

        throw err
    }

}