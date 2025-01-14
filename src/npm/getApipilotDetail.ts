import { ApipilotRequest } from "../utils/axios";

/**
 * 获取apipilot详情
 * 
 * 
 * 
 * @param None
 *
 * @returns {Object} returnValue   
 * @returns {String} returnValue.name  
 * @returns {String} returnValue.version  
 * @returns {String} returnValue.type  
 * @returns {String} returnValue.main  
 * @returns {String} returnValue.module  
 * @returns {String} returnValue.types  
 * @returns {Object} returnValue.exports  
 * @returns {Object} returnValue.exports..  
 * @returns {String} returnValue.exports...import  
 * @returns {String} returnValue.exports...require  
 * @returns {Object} returnValue.exports../resume  
 * @returns {String} returnValue.exports../resume.import  
 * @returns {String} returnValue.exports../resume.require  
 * @returns {String} returnValue.exports../resume.types  
 * @returns {Object} returnValue.exports../company  
 * @returns {String} returnValue.exports../company.import  
 * @returns {String} returnValue.exports../company.require  
 * @returns {String} returnValue.exports../company.types  
 * @returns {Object} returnValue.scripts  
 * @returns {String} returnValue.scripts.dev  
 * @returns {String} returnValue.scripts.build  
 * @returns {Object} returnValue.devDependencies  
 * @returns {String} returnValue.devDependencies.typescript  
 * @returns {String} returnValue.devDependencies.vite  
 * @returns {String} returnValue._id  
 * @returns {String} returnValue.gitHead  
 * @returns {String} returnValue._nodeVersion  
 * @returns {String} returnValue._npmVersion  
 * @returns {Object} returnValue.dist  
 * @returns {String} returnValue.dist.integrity  
 * @returns {String} returnValue.dist.shasum  
 * @returns {String} returnValue.dist.tarball  
 * @returns {Number} returnValue.dist.fileCount  
 * @returns {Number} returnValue.dist.unpackedSize  
 * @returns {Array<Object>} returnValue.dist.signatures[]  
 * @returns {String} returnValue.dist.signatures[].keyid  
 * @returns {String} returnValue.dist.signatures[].sig  
 * @returns {Object} returnValue._npmUser  
 * @returns {String} returnValue._npmUser.name  
 * @returns {String} returnValue._npmUser.email  
 * @returns {Object} returnValue.directories  
 * @returns {Array<Object>} returnValue.maintainers[]  
 * @returns {String} returnValue.maintainers[].name  
 * @returns {String} returnValue.maintainers[].email  
 * @returns {Object} returnValue._npmOperationalInternal  
 * @returns {String} returnValue._npmOperationalInternal.host  
 * @returns {String} returnValue._npmOperationalInternal.tmp  
 * @returns {Boolean} returnValue._hasShrinkwrap  
 */
export function getApipilotDetail(params?: {
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
      .get("https://registry.npmjs.org/apipilot/latest", newParams, {
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
