#!groovy

slack 'Starting build pipeline for HFKotlinWeb'

properties properties: [
    disableConcurrentBuilds()
]

pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('SCM Checkout'){
            steps {
                checkout scm
            }
        }
        stage('Clean') {
            steps {
                script {
                    sh 'make clean'
                }
            }
        }
        stage('Build') {
            steps {
                        script {
                            nvm('version':'v8.10.0',
                                'nvmInstallURL': 'https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh',
                                'nvmNodeJsOrgMirror': 'https://nodejs.org/dist',
                                'nvmIoJsOrgMirror': 'https://nodejs.org/dist'
                               ) {
                                sh 'make build'
                            }
                            slack 'App built'
                        }
            }
        }

        stage('Test') {
            steps {
                parallel(
                    webclient: {
                        sh 'make test'
                        slack 'Web client tested'
                    },
                    edge: {
                        sh 'sleep 40'
                        sh 'make test_edge'
                        slack 'Edge tested'
                    },
                    ie: {
                        sh 'sleep 50'
                        sh 'make test_ie'
                        slack 'IE tested'
                    },
                )
            }
        }

        stage('Publish Site') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'website') {
                        sh 'make publish'
                        slack "Web site published\n${gitCommit}"
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                archiveArtifacts allowEmptyArchive: true, artifacts: 'tests/src/test/resources/features/**'
                cucumber 'tests/build/cucumber.json'
            }
            step([$class: 'CukedoctorPublisher', featuresDir: 'archive/tests/src/test/resources/features', format: 'HTML', hideFeaturesSection: false, hideScenarioKeyword: false, hideStepTime: false, hideSummary: false, hideTags: false, numbered: true, sectAnchors: true, title: 'Living Documentation', toc: 'RIGHT'])
        }
        failure {
            slack "Build failed: ${currentBuild.result}", '#ff0000'
        }
    }
}

def slack(String msg, String color = '#000000') {
    slackSend channel: 'builds', color: color, message: msg, teamDomain: 'aspenshore', tokenCredentialId: 'timekeeper-slack'
}
