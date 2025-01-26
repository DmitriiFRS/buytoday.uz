interface Props {
     className?: string;
     children: React.ReactNode;
}

const Container: React.FC<Props> = ({ className, children }) => {
     return <div className={`max-w-[1440px] m-[0_auto] p-[0_10px] ${className}`}>{children}</div>;
};

export default Container;
