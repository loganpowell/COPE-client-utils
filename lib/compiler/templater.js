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
 *      nodes: [
 *          {
 *              type: "human",
 *          },
 *          {
 *              type: "article"
 *          },
 *      ],
 *      assetsPr: [
 *          {
 *
 *          }
 *      ],
 *      edges: [
 *          [0, 1, "child"]
 *      ]
 * }
 *
 */
export const templater = config => { };
