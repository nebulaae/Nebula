export const Container = ({ children, className = '' }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`p-6 border border-gray-200 rounded-none ${className}`}>
            {children}
        </div>
    );
};