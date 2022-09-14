import { EVENT } from './eventNames';
import { MEASURE_TOOL_STYLE } from './inputConstants';

/* eslint-disable max-len, import/prefer-default-export */
/**
 * Name enumeration of available game options
 *
 * @property GAME_OPTION_NAMES
 * @type {Object}
 * @final
 */
export const GAME_OPTION_NAMES = {
    CONTROL_METHOD: 'controlMethod',
    DRAW_PROJECTED_PATHS: 'drawProjectedPaths',
    DRAW_ILS_DISTANCE_SEPARATOR: 'drawIlsDistanceSeparator',
    MEASURE_TOOL_PATH: 'measureToolPath',
    MOUSE_CLICK_DRAG: 'mouseClickDrag',
    PROJECTED_TRACK_LINE_LENGTHS: 'ptlLengths',
    RANGE_RINGS: 'rangeRings',
    SOFT_CEILING: 'softCeiling',
    THEME: 'theme',
    TOWER_CONTROLLER: 'towerController'
};

/**
 * User options
 *
 * These options are presented in a modal and are stored in localStorage
 *
 * @property GAME_OPTION_VALUES
 * @type {array<object>}
 * @final
 */
export const GAME_OPTION_VALUES = [
    {
        name: GAME_OPTION_NAMES.THEME,
        defaultValue: 'DEFAULT',
        description: '控制中心界面主题',
        type: 'select',
        onChangeEventHandler: EVENT.SET_THEME,
        optionList: [
            {
                displayLabel: '传统',
                value: 'CLASSIC'
            },
            {
                displayLabel: '缺省',
                value: 'DEFAULT'
            },
            {
                displayLabel: '天空',
                value: 'CELESTIAL'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.TOWER_CONTROLLER,
        defaultValue: 'SYSTEM',
        description: '塔台控制(试验)',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '系统控制',
                value: 'SYSTEM'
            },
            {
                displayLabel: '用户控制',
                value: 'USER'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.CONTROL_METHOD,
        defaultValue: 'classic',
        description: '控制方法',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '传统',
                value: 'classic'
            },
            {
                displayLabel: '方向键',
                value: 'arrows'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.DRAW_ILS_DISTANCE_SEPARATOR,
        defaultValue: 'from-theme',
        description: '在 ILS 上显示尾随分隔指示器',
        help: 'Draw a trailing indicator 2.5 NM (4.6km) behind landing aircraft to help with traffic spacing',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '取决主题',
                value: 'from-theme'
            },
            {
                displayLabel: '是',
                value: 'yes'
            },
            {
                displayLabel: '否',
                value: 'no'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.PROJECTED_TRACK_LINE_LENGTHS,
        defaultValue: '1-2-4-8',
        description: '预计轨道线 (PTL) 增量，以分钟为单位',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '0.5 x n ... 8',
                value: '0.5-1-1.5-2-2.5-3-3.5-4-4.5-5-5.5-6-6.5-7-7.5-8'
            },
            {
                displayLabel: '1.0 x n ... 8',
                value: '1-2-3-4-5-6-7-8'
            },
            {
                displayLabel: '1-2-4-6-8-10-12-14-16',
                value: '1-2-4-6-8-10-12-14-16'
            },
            {
                displayLabel: '0.5-1-2-4-8',
                value: '0.5-1-2-4-8'
            },
            {
                displayLabel: '1-2-4-8',
                value: '1-2-4-8'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.DRAW_PROJECTED_PATHS,
        defaultValue: 'selected',
        description: '绘制飞机投影轨迹',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '始终',
                value: 'always'
            },
            {
                displayLabel: '选择',
                value: 'selected'
            },
            {
                displayLabel: '从不',
                value: 'never'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.SOFT_CEILING,
        defaultValue: 'yes',
        description: '允许通过爬升离场',
        help: 'Normally aircraft departs the airspace by flying beyond the horizontal bounds.  If set to yes, aircraft may also depart the airspace by climbing above it.',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '是',
                value: 'yes'
            },
            {
                displayLabel: '否',
                value: 'no'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.MOUSE_CLICK_DRAG,
        defaultValue: 'right',
        description: '平移操作',
        help: 'Which mouse button (left or right) should drag the canvas when held',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '鼠标左键',
                value: 'left'
            },
            {
                displayLabel: '鼠标右键',
                value: 'right'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.RANGE_RINGS,
        defaultValue: 'default',
        description: '距离环',
        help: 'Radius of range rings, in nautical miles',
        type: 'select',
        onChangeEventHandler: EVENT.RANGE_RINGS_CHANGE,
        optionList: [
            {
                displayLabel: '缺省',
                value: 'default'
            },
            {
                displayLabel: '关闭',
                value: 'off'
            },
            {
                displayLabel: '1 nm',
                value: 1
            },
            {
                displayLabel: '2 nm',
                value: 2
            },
            {
                displayLabel: '5 nm',
                value: 5
            },
            {
                displayLabel: '10 nm',
                value: 10
            },
            {
                displayLabel: '15 nm',
                value: 15
            },
            {
                displayLabel: '20 nm',
                value: 20
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.MEASURE_TOOL_PATH,
        defaultValue: '0',
        description: '测量路径样式',
        help: 'How the path is rendered when using the range/bearing measuring tool',
        type: 'select',
        onChangeEventHandler: EVENT.MEASURE_TOOL_STYLE_CHANGE,
        optionList: [
            {
                displayLabel: '仅直线',
                value: MEASURE_TOOL_STYLE.STRAIGHT
            },
            {
                displayLabel: '弧线到引导点, 之后直线',
                value: MEASURE_TOOL_STYLE.ARC_TO_NEXT
            },
            {
                displayLabel: '所有线段为弧线',
                value: MEASURE_TOOL_STYLE.ALL_ARCED
            }
        ]
    }
];
