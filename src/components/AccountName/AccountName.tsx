/**
 * @author Roman Beganov <rbeganov@usetech.com>
 */

import classNames from 'classnames';
import React, { FC } from 'react';
import './AccountName.scss';

interface AccountNameProps {
    name: string;
    avatar?: string;
}

const AccountName: FC<AccountNameProps> = ({
    name,
    avatar = 'https://s3-alpha-sig.figma.com/img/8b11/3598/ef0463cd5b490e328725b5cc8cd431b1?Expires=1640563200&Signature=A4ikMJPH14AkTEVYPjqmIqlsPKdWNpHdEBcgmPDxu0sUMnIV1AIIPj59I16POZFPBOP5G1gpiC~RJ4TG8Z5iJBKL8hJ6aaXM0X3nufcwzvt8RReabDjOG6dXM2BiRMYLoyuQavxJzHwdlAohZQP7gyw5Z4pU8cYwQOmNW26d7ZQPIypeHE9Jcy-tyyO3b66QW3Vs0VP9qRlg8aBfrlupwN9pRQfnyvnHhVpKYvkcsDIO3pQZD8Xuj3w9~U10FDNdG8A5nNkYhs2FdBGZAMZQ~chAQFksWEW6qMyW5WijbZnChmMLrlPbdNy5CfVA8w~lhY8t0rgrym~x3OrhdMzyeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}: AccountNameProps) => (
    <div className="unique-account-name-wrapper">
        <div className="account-avatar">
            <img src={avatar} alt="account-avatar" />
        </div>
        <div className="account-name">
            <span className="title">Account name</span>
            <span className="name">{name}</span>
        </div>
    </div>
);

export default AccountName;
