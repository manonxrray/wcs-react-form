import React from "react";
import Skill, { SkillProps } from "./Skill";
import { Card, List } from "./styles/elements";

type WilderProps = {
  city: string
  justAdded: boolean
  name:string
  skills: SkillProps[]
}

const Wilder = ({ city, name, justAdded, skills }:WilderProps) => {
  return (
    <Card>
      <img src="./blank-profile-picture-female.png" alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill._id} {...skill} />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;
