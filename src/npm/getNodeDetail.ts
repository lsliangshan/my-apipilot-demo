import { ApipilotRequest } from "../utils/axios";

/**
 * 获取Node详情
 * 
 * 
 * 
 * @param None
 *
 * @returns {Object} returnValue   
 * @returns {String} returnValue.analyzedAt  
 * @returns {Object} returnValue.collected  
 * @returns {Object} returnValue.collected.metadata  
 * @returns {String} returnValue.collected.metadata.name  
 * @returns {String} returnValue.collected.metadata.scope  
 * @returns {String} returnValue.collected.metadata.version  
 * @returns {String} returnValue.collected.metadata.description  
 * @returns {Array<String>} returnValue.collected.metadata.keywords[]  
 * @returns {String} returnValue.collected.metadata.date  
 * @returns {Object} returnValue.collected.metadata.author  
 * @returns {String} returnValue.collected.metadata.author.name  
 * @returns {String} returnValue.collected.metadata.author.email  
 * @returns {String} returnValue.collected.metadata.author.username  
 * @returns {Object} returnValue.collected.metadata.publisher  
 * @returns {String} returnValue.collected.metadata.publisher.username  
 * @returns {String} returnValue.collected.metadata.publisher.email  
 * @returns {Array<Object>} returnValue.collected.metadata.maintainers[]  
 * @returns {String} returnValue.collected.metadata.maintainers[].username  
 * @returns {String} returnValue.collected.metadata.maintainers[].email  
 * @returns {Object} returnValue.collected.metadata.repository  
 * @returns {String} returnValue.collected.metadata.repository.type  
 * @returns {String} returnValue.collected.metadata.repository.url  
 * @returns {Object} returnValue.collected.metadata.links  
 * @returns {String} returnValue.collected.metadata.links.npm  
 * @returns {String} returnValue.collected.metadata.links.homepage  
 * @returns {String} returnValue.collected.metadata.links.repository  
 * @returns {String} returnValue.collected.metadata.links.bugs  
 * @returns {String} returnValue.collected.metadata.license  
 * @returns {Object} returnValue.collected.metadata.dependencies  
 * @returns {String} returnValue.collected.metadata.dependencies.node-bin-setup  
 * @returns {Object} returnValue.collected.metadata.devDependencies  
 * @returns {String} returnValue.collected.metadata.devDependencies.eslint  
 * @returns {Array<Object>} returnValue.collected.metadata.releases[]  
 * @returns {String} returnValue.collected.metadata.releases[].from  
 * @returns {String} returnValue.collected.metadata.releases[].to  
 * @returns {Number} returnValue.collected.metadata.releases[].count  
 * @returns {String} returnValue.collected.metadata.readme  
 * @returns {Object} returnValue.collected.npm  
 * @returns {Array<Object>} returnValue.collected.npm.downloads[]  
 * @returns {String} returnValue.collected.npm.downloads[].from  
 * @returns {String} returnValue.collected.npm.downloads[].to  
 * @returns {Number} returnValue.collected.npm.downloads[].count  
 * @returns {Number} returnValue.collected.npm.starsCount  
 * @returns {Object} returnValue.collected.github  
 * @returns {Number} returnValue.collected.github.starsCount  
 * @returns {Number} returnValue.collected.github.forksCount  
 * @returns {Number} returnValue.collected.github.subscribersCount  
 * @returns {Object} returnValue.collected.github.issues  
 * @returns {Number} returnValue.collected.github.issues.count  
 * @returns {Number} returnValue.collected.github.issues.openCount  
 * @returns {Object} returnValue.collected.github.issues.distribution  
 * @returns {Number} returnValue.collected.github.issues.distribution.3600  
 * @returns {Number} returnValue.collected.github.issues.distribution.10800  
 * @returns {Number} returnValue.collected.github.issues.distribution.32400  
 * @returns {Number} returnValue.collected.github.issues.distribution.97200  
 * @returns {Number} returnValue.collected.github.issues.distribution.291600  
 * @returns {Number} returnValue.collected.github.issues.distribution.874800  
 * @returns {Number} returnValue.collected.github.issues.distribution.2624400  
 * @returns {Number} returnValue.collected.github.issues.distribution.7873200  
 * @returns {Number} returnValue.collected.github.issues.distribution.23619600  
 * @returns {Number} returnValue.collected.github.issues.distribution.70858800  
 * @returns {Number} returnValue.collected.github.issues.distribution.212576400  
 * @returns {Boolean} returnValue.collected.github.issues.isDisabled  
 * @returns {Array<Object>} returnValue.collected.github.contributors[]  
 * @returns {String} returnValue.collected.github.contributors[].username  
 * @returns {Number} returnValue.collected.github.contributors[].commitsCount  
 * @returns {Array<Object>} returnValue.collected.github.commits[]  
 * @returns {String} returnValue.collected.github.commits[].from  
 * @returns {String} returnValue.collected.github.commits[].to  
 * @returns {Number} returnValue.collected.github.commits[].count  
 * @returns {Object} returnValue.collected.source  
 * @returns {Object} returnValue.collected.source.files  
 * @returns {Number} returnValue.collected.source.files.readmeSize  
 * @returns {Number} returnValue.collected.source.files.testsSize  
 * @returns {Array<String>} returnValue.collected.source.linters[]  
 * @returns {Object} returnValue.evaluation  
 * @returns {Object} returnValue.evaluation.quality  
 * @returns {Number} returnValue.evaluation.quality.carefulness  
 * @returns {Number} returnValue.evaluation.quality.tests  
 * @returns {Number} returnValue.evaluation.quality.health  
 * @returns {Number} returnValue.evaluation.quality.branding  
 * @returns {Object} returnValue.evaluation.popularity  
 * @returns {Number} returnValue.evaluation.popularity.communityInterest  
 * @returns {Number} returnValue.evaluation.popularity.downloadsCount  
 * @returns {Number} returnValue.evaluation.popularity.downloadsAcceleration  
 * @returns {Number} returnValue.evaluation.popularity.dependentsCount  
 * @returns {Object} returnValue.evaluation.maintenance  
 * @returns {Number} returnValue.evaluation.maintenance.releasesFrequency  
 * @returns {Number} returnValue.evaluation.maintenance.commitsFrequency  
 * @returns {Number} returnValue.evaluation.maintenance.openIssues  
 * @returns {Number} returnValue.evaluation.maintenance.issuesDistribution  
 * @returns {Object} returnValue.score  
 * @returns {Number} returnValue.score.final  
 * @returns {Object} returnValue.score.detail  
 * @returns {Number} returnValue.score.detail.quality  
 * @returns {Number} returnValue.score.detail.popularity  
 * @returns {Number} returnValue.score.detail.maintenance  
 */
export function getNodeDetail(params?: {
  /**
   * Request Data
   */
  data?: {
},
  /**
   * Request Headers
   */
  headers?: {
}
}) {
  return new Promise(async (resolve) => {
    const apipilotRequest: ApipilotRequest = ApipilotRequest.getInstance();
    const defaultParams: any = {};
    const newParams = {...defaultParams, ...(params?.data || {})};
    
    const defaultHeaders: any = {};
    const newHeaders = {...defaultHeaders, ...(params?.headers || {})};
    
    await apipilotRequest
      .get("https://api.npms.io/v2/package/node", newParams, {
        headers: newHeaders,
      })
      .then((res) => {
        if (res.status != 200) {
          resolve({
            code: res.status,
            message: res.statusText || "Failed",
          });
        } else {
          resolve({
            code: 200,
            data: res.data,
          });
        }
      })
      .catch((err) => {
        resolve({
          code: 1001,
          message: err.message,
        });
      });
  });
}
