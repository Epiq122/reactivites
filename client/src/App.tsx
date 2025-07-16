import {useEffect, useState} from "react";
import axios from "axios";
import {List, ListItem, ListItemText, Typography} from "@mui/material";

function App() {
    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(resp => setActivities(resp.data))
    }, []);


    return (
        <>
            <Typography variant="h3">Reactivities</Typography>
            <List>
                {activities.map((activity) => (
                    <ListItem key={activity.id}><ListItemText>{activity.title}</ListItemText></ListItem>
                ))}
            </List>
        </>
    )

}

export default App
