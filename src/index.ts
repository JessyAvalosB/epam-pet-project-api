import 'dotenv/config';
import app from "./app";

import './dbConnection';

app.listen(app.get('PORT'), () => {
    console.log(`Server listening on http://localhost:${app.get('PORT')}`);
});