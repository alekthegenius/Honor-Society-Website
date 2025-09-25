import type { PageServerLoad } from './$types';
import matter from "gray-matter";
import { v4 as uuidv4 } from "uuid";


export const load: PageServerLoad = async () => {
    const files = import.meta.glob("/src/lib/events/*.markdown", { query: '?raw', import: 'default' });

    let events: any[] = [];

    for (const path in files) {
        const getFile = files[path];         
        const rawContent = await getFile(); 
        const { data, content: body } = matter(rawContent);

        events.push({
            id: uuidv4(),
            title: data.title,
            datetime: data.datetime,
            location: data.location,
            body: body
        });
    }

    const now = new Date();
    events.sort((a, b) => {
        const aTime = new Date(a.datetime).getTime();
        const bTime = new Date(b.datetime).getTime();
        return Math.abs(aTime - now.getTime()) - Math.abs(bTime - now.getTime());
    });

    return { events };
}