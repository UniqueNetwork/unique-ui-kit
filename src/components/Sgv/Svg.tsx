import React, {
    FC
} from 'react';
import cn from 'classnames';
import arrowLeft from '../../assets/svg/arrow_left.svg';
import { useGetIcon } from './useGetIcon';

//type TButtonProps = ComponentProps & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick'>;

//type TView = 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger';

interface IComponentProps {
    path: string;
    className: string;
}

export const Icon: FC<IComponentProps> = ({
    path,
    className
}: IComponentProps) => {

    console.log(path);
    const icon = useGetIcon(path);
console.log('icon from icon', icon);

if (!icon) {
    return (<div>Загрузка...</div>);
  }

    return (
        <span className={className}
             dangerouslySetInnerHTML={{__html: icon}}/>
    )
};

// иконка
// принимает путь
// имеет кеш иконок
// если в кеше нет иконки - делает запрос за ней, записывает в кеш
// отриосвывает
// все иконки должны иметь color: current;