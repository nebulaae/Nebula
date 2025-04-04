export const Container = ({ children, className = '' }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`p-2 sm:p-4 md:p-6 border border-gray-200 rounded-none relative ${className}`}>
            {children}
        </div>
    );
};