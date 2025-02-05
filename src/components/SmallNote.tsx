interface SmallNoteProps {
  text: string;
}

const SmallNote = ({ text }: SmallNoteProps) => {
  return (
    <div className="bg-white flex items-center justify-center gap-4  border-light border-mainBlue drop-shadow-secondary rounded-larger px-8 py-3 max-xl:px-5">
      <div className="size-4 bg-mainBlue rounded-full"></div>
      <p className="font-inter font-semibold text-foreground text-lg max-xl:text-base max-lg:text-sm">
        {text}
      </p>
    </div>
  );
};

export default SmallNote;
