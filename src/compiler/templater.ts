/**
 * templater takes a json config object and spits out crud
 * operations (using batch) for that config. Makes for easy
 * custom client components.
 *
 * uses adjacency syntax
 *
 * properties:
 * - type (article, human, etc)
 * - relationship (parent, child, etc)
 *
 * using schema for courses
 * https://github.com/loganpowell/COPE-admin-UI/issues/1
 * @example
 * const config = {
 *      assetsPr: {
 *          1: {
 *              type: "T_OG_TITLE"
 *          }
 *      },
 *      nodes: {
 *          1: {
 *              type: "H_AUTHOR",
 *              status: "PRIVATE",
 *          },
 *          2: {
 *              type: "A_ARTICLE"
 *              status: "DRAFT"
 *          },
 *      },
 *      edges: [
 *          // [node, ...assetsPr], [node, ...assetsPr], relationship 
 *          [[1, 1, 2, 3, 4], [2, 1, 2, 3, 4], "HAS_CHILD"]
 *      ]
 * }
 *
 */
export const templater = config => {}
