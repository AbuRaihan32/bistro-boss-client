
const SectionHeader = ({subHeader, header}) => {
    return (
        <div className="w-fit mx-auto text-center mb-6">
            <p className="text-[#D99904] mb-4">--- {subHeader} ---</p>
            <h1 className="text-3xl py-2 border-y-[3px] uppercase">{header}</h1>
        </div>
    );
};

export default SectionHeader;