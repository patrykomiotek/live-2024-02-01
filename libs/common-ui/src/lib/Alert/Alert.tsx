import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import { classMerge } from '../utils/cn';

type ALERT_TYPE = 'warning' | 'error' | 'success' | 'info';

type Props = {
  title: string;
  type?: ALERT_TYPE;
  titleBold?: boolean;
  description?: string;
  showLeftBorder?: boolean;
};

const palette: Record<
  ALERT_TYPE,
  {
    borderColor: string;
    backgroundColor: string;
    textColor: string;
    textColorBold: string;
    textColorDescription: string;
    icon: React.ReactNode;
  }
> = {
  warning: {
    borderColor: 'border-yellow-400',
    backgroundColor: 'bg-yellow-50 dark:bg-gray-900',
    textColor: 'text-yellow-400',
    textColorBold: 'text-yellow-800 dark:text-yellow-400',
    textColorDescription: 'text-yellow-700',
    icon: (
      <ExclamationTriangleIcon
        className="h-5 w-5 text-yellow-400"
        aria-hidden="true"
      />
    ),
  },
  success: {
    borderColor: 'border-green-400',
    backgroundColor: 'bg-green-50 dark:bg-gray-900',
    textColor: 'text-green-400',
    textColorBold: 'text-green-800 dark:text-green-400',
    textColorDescription: 'text-green-700',
    icon: (
      <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
    ),
  },
  error: {
    borderColor: 'border-red-400',
    backgroundColor: 'bg-red-50 dark:bg-gray-900',
    textColor: 'text-red-400',
    textColorBold: 'text-red-800 dark:text-red-400',
    textColorDescription: 'text-red-700',
    icon: <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />,
  },
  info: {
    borderColor: 'border-blue-400',
    backgroundColor: 'bg-blue-50 dark:bg-gray-900',
    textColor: 'text-blue-400',
    textColorBold: 'text-blue-800 dark:text-blue-400',
    textColorDescription: 'text-blue-700',
    icon: (
      <InformationCircleIcon
        className="h-5 w-5 text-blue-400"
        aria-hidden="true"
      />
    ),
  },
};

export const Alert = ({
  title,
  type = 'success',
  titleBold = true,
  description = '',
  showLeftBorder = true,
}: Props) => {
  return (
    <div
      className={classMerge(
        palette[type].borderColor,
        palette[type].backgroundColor,
        'my-4 p-4',

        { 'border-l-4': showLeftBorder }
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">{palette[type].icon}</div>
        <div className="ml-3">
          <h3
            className={classMerge(`text-sm`, palette[type].textColorBold, {
              'font-medium': titleBold,
            })}
          >
            {title}
          </h3>

          {description && (
            <div
              className={`mt-2 text-sm ${palette[type].textColorDescription}`}
            >
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
