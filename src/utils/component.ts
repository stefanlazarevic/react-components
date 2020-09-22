let id = 0;

/**
 * 
 * @param prefix 
 */
export function getUniqueComponentId(prefix: string = 'c_id_') {
   id++;
   return `${prefix}${id}`;
}