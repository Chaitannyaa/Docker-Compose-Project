const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
    host: 'postgresdb',
    database: 'postgresdb',
    user: 'postgres',
    password: 'mysecretpassword',
    port: 5432
});

app.get('/', (req, res) => {
    const query = 'SELECT tool, count FROM poll_results ORDER BY count DESC';
    pool.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.send('Error fetching poll results');
        } else {
            const rows = result.rows;
            const max_count = rows[0].count;
            const popular_tools = rows.filter(row => row.count === max_count).map(row => row.tool);
            res.send(`
                <html>
                    <head>
                        <title>Poll Results</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #30D5C8;
                            }
                            
                            h1 {
                                text-align: center;
                                margin-top: 50px;
                                margin-bottom: 5px;
                                font-size: 50px;
                            }
                            ul {
                                list-style-type: none;
                                margin: 0;
                                padding: 0;
                        
                            }
                            li {
                                margin-bottom: 25px;
                                text-align: center;
                                font-size: 30px;
                            }
                            p {
                                text-align: center;
                                margin-top: 50px;
                                margin-bottom: 50px;
                                font-size: 40px;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Best Container Orchestration Tool</h1>
                        <h1>Poll Results </h1>
                        <ul>
                            <li>Kubernetes:      ${getCount(rows, 'Kubernetes')}</li>
                            <li>Docker Swarm:       ${getCount(rows, 'Docker Swarm')}</li>
                            <li>Mesos:      ${getCount(rows, 'Mesos')}</li>
                            <li>Nomad:      ${getCount(rows, 'Nomad')}</li>
                        </ul>
                        <p>${popular_tools.join(', ')} : the most popular orchestration tool with ${max_count} votes.</p>
                    </body>
                </html>
            `);
        }
    });
});

function getCount(rows, tool) {
    const row = rows.find(row => row.tool === tool);
    return row ? row.count : 0;
}

app.listen(3000, () => console.log('Web app listening on port 3000!'));
