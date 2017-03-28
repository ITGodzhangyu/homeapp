/**
 * 分组导航组件
 */
import React, { Component, PropTypes } from 'react';

const defaultProps = {
    onNavItemFocus() {
    }
};

export default class ItemNavBar extends Component {

    static propTypes = {
        list: PropTypes.array,
        onNavItemFocus: PropTypes.func,
        renderItem: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.navItemList = [];
    }

    componentDidMount() {
        this.baseY = this.containerDom.getBoundingClientRect().top;
    }

    /**
     * 完全根据title列表的引用是否改变来决定是否render
     * @param props
     * @returns {boolean}
     */
    shouldComponentUpdate(props) {
        return props.list !== this.props.list;
    }

    componentDidUpdate() {
        this.baseY = this.containerDom.getBoundingClientRect().top;
    }

    /**
     * 导航项目被hover时触发的回调
     * @param item
     */
    onNavItemFocus(item) {
        const { onNavItemFocus } = this.props;
        onNavItemFocus(item);
    }

    /**
     * 给导航栏容器绑定的onTouchStart事件
     * @param evt
     */
    onNavBarStart(evt) {
        evt.preventDefault();

        const target = evt.target;

        if (target) {
            const focusedItem = this.getNavItemByDom(target);
            const { onNavItemFocus } = this.props;
            onNavItemFocus(focusedItem);
        }
    }

    /**
     * 给导航栏容器绑定的move事件,随着move的改变,导航栏项目的hover状态也随着改变并触发对应组件的onNavItemFocus
     * @param evt
     */
    onNavBarMove(evt) {
        evt.preventDefault();

        const offsetY = evt.touches && evt.touches[0].clientY - this.baseY;

        if (!isNaN(offsetY)) {
            const focusedItem = this.getNavItemByOffsetY(offsetY);
            const { onNavItemFocus } = this.props;
            onNavItemFocus(focusedItem);
        }
    }

    /**
     * 获取当前hover住的导航项
     * @param offsetY
     * @returns {*}
     */
    getNavItemByOffsetY(offsetY) {
        let ret = null;
        if (offsetY <= 0) {
            ret = this.navItemList[0];
        } else {
            ret = this.navItemList.find((item, i) => {
                const list = this.navItemList;
                if (i < list.length - 1) {
                    return item.top <= offsetY && list[i + 1].top > offsetY;
                } else if (item.top <= offsetY) {
                    return true;
                }
                return false;
            });
        }
        return ret;
    }

    /**
     * 根据dom节点获取对应的导航项组件
     * @param dom
     * @returns {*}
     */
    getNavItemByDom(dom) {
        return this.navItemList.find((item) => item.dom === dom);
    }

    render() {
        const { renderItem, list } = this.props;
        // 每次itemlist可能发生变化时必须重置navItemList
        this.navItemList = [];

        return (
            <ul
                className="index"
                ref={(dom) => {
                    this.containerDom = dom;
                }}
                onTouchStart={(evt) => this.onNavBarStart(evt)}
                onTouchMove={(evt) => this.onNavBarMove(evt)}
            >
                {list.map((groupTitle, i) =>
                    <li
                        ref={(dom) => {
                            if (dom) {
                                this.navItemList[i] = {
                                    dom,
                                    groupKey: groupTitle.groupKey,
                                    top: dom.offsetTop
                                };
                            }
                        }}
                        key={groupTitle.groupKey}
                    >
                        {renderItem(groupTitle.groupKey)}
                    </li>
                )}
            </ul>
        );
    }
}

ItemNavBar.defaultProps = defaultProps;
