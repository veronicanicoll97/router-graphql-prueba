import fs from 'fs';
import path from 'path';

export default (dirname: string, name: string) => {
    return fs.readFileSync(path.join(dirname, `${name}.graphql`)).toString("utf8")
}