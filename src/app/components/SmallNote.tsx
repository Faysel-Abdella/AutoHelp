import React from "react";

interface SmallNoteProps {
  text: string;
}

const SmallNote = ({ text }: SmallNoteProps) => {
  return (
    <div className="bg-white flex items-center justify-center gap-4 border-light border-mainBlue drop-shadow-secondary rounded-larger px-8 py-3">
      <div className="size-4 bg-mainBlue rounded-full"></div>
      <p className="font-inter font-semibold text-foreground text-lg">{text}</p>
    </div>
  );
};

export default SmallNote;
