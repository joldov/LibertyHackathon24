
package forge;

import com.atlassian.bamboo.specs.api.BambooSpec;
import com.atlassian.bamboo.specs.builders.task.ScriptTask;
import com.lmig.forge.bamboo.specs.patterns.deployment.cloudfoundry.CloudFoundryBlueGreenFileDeployment;
import com.lmig.forge.bamboo.specs.patterns.build.node.NodeAppBuild;
import com.lmig.forge.bamboo.specs.patterns.AddOns;
import static com.lmig.forge.bamboo.specs.components.tasks.ShellScript.fileToString;

@BambooSpec
public class Pipeline {

    private static final AddOns ADD_ONS = new AddOns()
            .buildAddOns()
            .deploymentAddOns();

    public static void main(String[] args) {
        // Build
        new NodeAppBuild(PipelineParameters.PIPELINE_CONFIGURATION)
                .releaseInclusions("npm-packages-offline-cache", "./.npmrc", "./.yarnrc", "./prepare-husky.js")
                .addOns(ADD_ONS)
                .preBuildTasks( new ScriptTask() .description("Running Lint") .inlineBody(
                        fileToString("com/lmig/forge/bamboo/specs/components/tasks/node/configureEnvironment.sh") +
                        fileToString("com/lmig/forge/bamboo/specs/components/tasks/node/configureTools.sh") +
                        "./scripts/securityAudit.sh" + "\n" +
                        "./scripts/lint.sh"))
                .outputDirectory(".next")
                .publish();

        // Deployment
        new CloudFoundryBlueGreenFileDeployment(PipelineParameters.PIPELINE_CONFIGURATION)
                .addOns(ADD_ONS)
                .autoDeployAfterSuccessfulBuild()
                .publish();
    }
}
