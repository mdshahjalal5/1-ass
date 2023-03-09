
const express = require("express");
const { randomUser, getByid, getSpecificTool, updateUser, randomUserAll, addData, updateRandomUser } = require("../../controller/tools.controller");
const viewcount = require("../../middleware/viewCount");
const router = express.Router();
router
.route('/')
    /**
       * @api {get} /tools All tools
       * @apiDescription Get all the tools
       * @apiPermission admin
       *
       * @apiHeader {String} Authorization   User's access token
       *
       * @apiParam  {Number{1-}}         [page=1]     List page
       * @apiParam  {Number{1-100}}      [limit=10]  Users per page
       *
       * @apiSuccess {Object[]} all the tools.
       *
       * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
       * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
       */

// .get(getAllTools)
    /**
     * @api {post} /tools save a tool
     * @apiDescription Get all the tools
     * @apiPermission admin
     *
     * @apiHeader {String} Authorization   User's access token
     *
     * @apiParam  {Number{1-}}         [page=1]     List page
     * @apiParam  {Number{1-100}}      [limit=10]  Users per page
     *
     * @apiSuccess {Object[]} all the tools.
     *
     * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
     * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
     */
.post( (req, res) => {
    
});

router.get('/random', randomUser )
router.get('/all', randomUserAll )
router.post('/save', addData)
router.patch('/update/:id', updateRandomUser)
module.exports = router;
