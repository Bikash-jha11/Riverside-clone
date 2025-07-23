import express, { Request, Response } from "express";
import Meeting from "../model/Meeting";

interface customReq extends Request {
  user?: any;
}

const meetingCtrl = {
  savemeeting: async (req: customReq, res: Response) => {
    const { title, invitees, date } = req.body;
   

    if(!title || !invitees || !date){
        return res.status(400).json({msg:"please add all fields"})
    }

    

    const newMeeting = new Meeting({
        title,
        invitees,
        date,
      });

    newMeeting.creator_id = req.user;
   await newMeeting.save();

    res.json({
        newMeeting
    })
  },
};


export default meetingCtrl