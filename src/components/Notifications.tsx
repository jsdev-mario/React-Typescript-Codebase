import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { CheckCircleIcon, ShieldExclamationIcon } from '@heroicons/react/outline';

const Notifications = () => {
    return (
        <Toaster
            toastOptions={{
                duration: 3000,
            }}
            position="top-right"
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => {
                        return (
                            <div className="animate-enter max-w-md w-full bg-white pointer-events-auto flex ">
                                <div className="flex p-3">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 pt-0.5">
                                            {t.type === 'success' ? (
                                                <CheckCircleIcon className="h-10 w-10 rounded-full text-emerald-600" />
                                            ) : (
                                                <ShieldExclamationIcon className="h-10 w-10 rounded-full text-red-600" />
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            {t.type === 'success' ? (
                                                <p className="text-sm font-medium text-emerald-600">Success</p>
                                            ) : (
                                                <p className="text-sm font-medium text-red-600">Error</p>
                                            )}
                                            <div className="text-sm text-gray-500 -ml-2">{message}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-l border-gray-200">
                                    <button
                                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                        onClick={() => toast.dismiss(t.id)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        );
                    }}
                </ToastBar>
            )}
        </Toaster>
    );
};

export default Notifications;
