import React from "react";
import { Button as MaterialBtn } from "@material-ui/core";

/**
 * number: 数字
 * string: 文字列
 * boolean: 真偽
 * { title: string; }[]: 連想配列
 * React.ReactNode: Reactノード（子ノード）
 * () => void: 関数
 *
 * パラメータ名の横に ? をつけると渡しても渡さなくてもどちらでも良いパラメータを作成できる。
 * （例）isTrue?: true; → isTrueを渡さなかった場合、isTrueには false が代入される。
 */

type Props = {
  className: string;
  func: () => void;
  children: React.ReactNode;
};

/**
 * クリックすると渡されたfunctionを実行するボタンを提供します。
 * 渡すパラメータは上の type Props を参照してください。
 */

const Button: React.FC<Props> = (props) => {
  const { className, func, children } = props;
  return (
    <MaterialBtn className={className} onClick={() => func()}>
      {children}
    </MaterialBtn>
  );
};

export default Button;
