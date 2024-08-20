import db from '../server'

export const getAllComponents = async (req, res) => {
    try {
        const { component_id, author_id} = req.body;
    } catch (error) {
        console.error(error);
        res.status(503).send({
            message: 'internal server error'
        })
    }
}

export const getComponentById = async (req, res) => {
    try {
        const params =  { component_id }

        const sql = /*sql*/`
            select c.component_id from components c where c.component_id = ?
        `;

        const results = await db.query(sql, [params])

        if (results.length === 0) {
            return res.status(404).send({
                message: 'sorry, component was not found with the id'
            });
        } else {
            return res.status(200).send({
                message: 'successfully retrieved the component',
                data: results
            })
        }
    } catch (error) {
        console.error(error);
        res.status(503).send({
            message: 'internal server error'
        })
    }
}

export const searchByName = async (req, res) => {
    try {
        const  { component_id, component_name } = req.body;
        
        const sql = /*sql*/`
            select c.component_name, 
                   c.component_id 
            from components c 
            where c.component_name = ?
            and c.component_id = ?
        `;

    
        const results = await db.query(sql, [component_id, component_name]);

        if (results.length === 0) {
            return res.status(404).send({
                message: 'sorry the component you are searching for does not exist'
            })
        } else {
            return res.status(200).send({
                message: 'successfully searched the database',
                data: results
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

export const searchByUser = async (req, res) => {
    try {
        const  { author_name } = req.body;
        
        const sql = /*sql*/`
            select c.component_name
            from components c 
            where c.component_name = ?
        `;

    
        const results = await db.query(sql, [author_name]);

        if (results.length === 0) {
            return res.status(404).send({
                message: 'sorry the component you are searching for does not exist'
            })
        } else {
            return res.status(200).send({
                message: 'successfully searched the database',
                data: results
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

export const getTotalLineCount = async (req, res) => {
    try {
        const sql = /*sql*/`
            select c.loc from components c;
        `;

        const result = db.query(sql);

        const tloc = result.reduce((a, b) => {
            a + b
        }, 0);

        return tloc;
    } catch (error) {
        console.error(error);
    }
}

export const getCommentCountMultiLine = async _ => {
    let startStr = '/*'
    let endStr = '*/'
    let re = new RegExp(splitVal)
    let numComment = 0
    
    if (startStr && endStr) {
        if (str === re.test(startStr)) {
            nc = numComment + 1
        } else {
            /***** do nothing *****/
        }
    }
}

export const getSingleLineCmt = () => {
    let startStr = '//'
    let lineCount = 1
    if (startStr) {
        lineCount = lineCount + 1
    }

    return lineCount
}

export const getDocTypeCount = _ => {
    let startStr = '/**'
    let endStr = '*/'
    let lineCnt = 0
    while (startStr !== '') {
        if (startStr && endStr) {
            lineCnt = lineCnt+ 1
            return lineCnt    
        }
    }
}

export const getVersion = (c_name, c_version) => {
    try {
        const sql = /*sql*/`
        select c.component_name, c.c_version from components c
        where c.component_name = c_name and c.version = c_version
    `;

        const result = db.query(sql, [c_name, c_version]);

        if (result.length === 0) {
            return res.status(404).send({
                message: 'error, query returned an empty',
                data: null
            })
        } else  {
            return res.status(200).send({
                message: 'success',
                data: result
            })
        }
    } catch (error) {
        console.error(error)
        return res.status(503).send({
            message: 'internal server error',
            data: null        
        }) 
    }
}