import express from 'express'
const router = express.Router();
const apiUrl = 'http://localhost:3000/api'

import {
    getAllComponents,
} from '../controllers/component.controller.mjs'

router.get(apiUrl + '/component', getAllComponents);
router.get(apiUrl + '/components/:id')