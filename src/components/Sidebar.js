import React, { useState, useEffect } from 'react'
import './css/Sidebar.css'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import db from '../firebase/firebase'
import { useStateValue } from '../context/StateProvider'

function Sidebar() {
    const[channels, setChannels] = useState([]);
    const[{user}] = useStateValue();


    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot =>(
            setChannels(snapshot.docs.map(doc =>({
                id: doc.id,
                data : doc.data()
            })))
        ));
        
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>React JS Oficial</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
                
            </div>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels.map(channel =>{
                return <SidebarOption title={channel.data.name}
                        id={channel.id} />
            })}
        
        </div>
    )
}

export default Sidebar
