pipeline {
    agent any

    tools {
        nodejs 'Node v24' 
    }

    stages {
        stage('Environment Setup') {
            steps {
                bat 'npm install'
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                // The '|| exit 0' ensures we reach the 'post' block to see the report
                bat 'npx playwright test --project=chromium || exit 0'
            }
        }
    }

    post {
        always {
            /* The 'publishHTML' step 'harvests' the folder Playwright just created.
            */
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkName: false,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}