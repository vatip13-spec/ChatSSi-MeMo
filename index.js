const STMN_MODULE = 'st_private_notes';
const STMN_CHAT_KEY = 'st_private_notes_v1';
const STMN_VERSION = 4;
const STMN_DATA_SCHEMA = 2;
const STMN_BACKUP_SCHEMA = 1;
const STMN_INDEX_FILE = 'chatssi_memo_index.json';
const STMN_INDEX_PREVIOUS_FILE = 'chatssi_memo_index.previous.json';
const STMN_OWNER_FILE_PREFIX = 'chatssi_memo_owner_';
const STMN_IMAGE_FILE_PREFIX = 'chatssi_memo_img_';
const STMN_LEASE_MS = 90_000;
const STMN_LEASE_RENEW_MS = 30_000;

const STMN_DEFAULT_SETTINGS = Object.freeze({
    showFloatingButton: true,
    themeId: 'basic',
    customTheme: {
        schema: 1,
        name: '내 커스텀 테마',
        panelBg: '#f7f3eb',
        panelText: '#292724',
        panelBorder: '#cfc8ba',
        cardBg: '#fff5a9',
        cardText: '#302d27',
        cardBorder: '#c7b76d',
        accent: '#b98924',
        buttonBg: '#fffaf0',
        editorBg: '#fffdf4',
        cornerRadius: 10,
    },
    selectedFontId: 'system',
    customFonts: [],
    desktopPanelWidth: 390,
    tabletLandscapePanelWidth: 390,
    phonePortraitHeightRatio: 0.88,
    phoneLandscapeHeightRatio: 0.9,
    tabletPortraitHeightRatio: 0.74,
    phonePortraitWidthRatio: 1,
    phoneLandscapeWidthRatio: 1,
    tabletPortraitWidthRatio: 1,
    phonePortraitTopRatio: null,
    phoneLandscapeTopRatio: null,
    tabletPortraitTopRatio: null,
    phonePortraitLeftRatio: null,
    phoneLandscapeLeftRatio: null,
    tabletPortraitLeftRatio: null,
    floatingXRatio: null,
    floatingYRatio: null,
});

const STMN_THEME_IDS = ['basic', 'windows-notepad', 'current', 'custom'];
const STMN_BUILTIN_FONTS = Object.freeze([
    { id: 'builtin-nanum-barun-gothic', label: '나눔바른고딕', family: 'NanumBarunGothic', url: 'https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot', source: 'font', weight: '400' },
    { id: 'builtin-nanum-barun-pen', label: '나눔바른펜', family: 'NanumBarunPen', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunpen.woff', source: 'font', weight: '400' },
    { id: 'builtin-nanum-square-neo', label: '나눔스퀘어 네오', family: 'NanumSquareNeo', url: 'https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-cBd.woff2', source: 'font', weight: '400' },
    { id: 'builtin-nanum-square-round', label: '나눔스퀘어라운드', family: 'NanumSquareRound', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff', source: 'font', weight: '400' },
    { id: 'builtin-nexon-lv2-gothic', label: '넥슨 Lv.2 고딕', family: 'NexonLv2Gothic', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff', source: 'font', weight: '400' },
    { id: 'builtin-monoplex-kr', label: '모노플렉스KR', family: 'Monoplexkr', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2', source: 'font', weight: '400' },
    { id: 'builtin-soon-batang', label: '순바탕', family: 'Soonbatang', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Light.woff', source: 'font', weight: '300' },
    { id: 'builtin-escore-dream', label: '에스코어드림', family: 'Escoredream', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff', source: 'font', weight: '400' },
    { id: 'builtin-yes-myungjo', label: '예스 명조', family: 'YesMyungjo', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_13@1.0/YESMyoungjo-Regular.woff', source: 'font', weight: '400' },
    { id: 'builtin-yes-gothic', label: '예스고딕', family: 'YesGothic', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_13@1.0/YESGothic-Regular.woff', source: 'font', weight: '400' },
    { id: 'builtin-iropke-batang', label: '이롭게바탕체', family: 'Iropke Batang', url: 'https://cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css', source: 'css', weight: '400' },
    { id: 'builtin-jeju-gothic', label: '제주고딕', family: 'Jeju Gothic', url: 'https://fonts.googleapis.com/earlyaccess/jejugothic.css', source: 'css', weight: '400' },
    { id: 'builtin-pretendard', label: '프리텐다드', family: 'Pretendard', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Regular.woff2', source: 'font', weight: '400' },
    { id: 'builtin-school-safety-foundation', label: '학교안심 바른바탕', family: 'SchoolSafetyFoundation', url: 'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimBareonbatangR.woff2', source: 'font', weight: '400' },
]);
const STMN_HIGHLIGHTS = ['#fff08a', '#ffc5d9', '#bfe7ff', '#cdefbd', '#dccbff'];
const STMN_TEXT_SIZES = Object.freeze([
    { id: 'very-large', label: '아주 크게' },
    { id: 'large', label: '크게' },
    { id: 'normal', label: '보통' },
    { id: 'small', label: '작게' },
    { id: 'very-small', label: '아주 작게' },
]);
const STMN_TEXT_SIZE_ALIASES = Object.freeze({
    '1': 'very-small',
    'x-small': 'very-small',
    '9px': 'very-small',
    '2': 'small',
    'small': 'small',
    '11px': 'small',
    '3': 'normal',
    'medium': 'normal',
    '13px': 'normal',
    '5': 'large',
    'x-large': 'large',
    '18px': 'large',
    '6': 'very-large',
    'xx-large': 'very-large',
    '24px': 'very-large',
});
const STMN_MAX_IMAGES = 6;
const STMN_IMAGE_MAX_SIDE = 1280;
const STMN_TYPING_MARKER = '\u200B';
const STMN_IME_SETTLE_MS = 120;
const STMN_KEYBOARD_MIN_SHRINK = 140;
const STMN_KEYBOARD_SHRINK_RATIO = 0.16;
const STMN_VIEWPORT_SETTLE_MS = 180;

let stmnPanelOpen = false;
let stmnSearch = '';
let stmnFindMatches = [];
let stmnFindIndex = -1;
let stmnFindRefreshTimer = null;
let stmnFindSelectionActive = false;
let stmnSaveTimer = null;
let stmnInitialized = false;
let stmnEditorRanges = new Map();
let stmnSelectedRanges = new Map();
let stmnPendingImageRanges = new Map();
let stmnSelectedImages = new Map();
const stmnComposingEditors = new WeakSet();
const stmnSettlingEditors = new WeakSet();
let stmnPanelObserver = null;
let stmnActiveFontResource = null;
const stmnNormalizedStores = new WeakSet();
let stmnStableViewport = null;
let stmnViewportTimer = null;
let stmnKeyboardOpen = false;
let stmnKeyboardPanelRect = null;
let stmnStorageRuntime = null;
let stmnStorageLoadToken = 0;
let stmnIndexWriteQueue = Promise.resolve();
let stmnLeaseTimer = null;
let stmnBackupBusy = false;
const stmnOwnerWriteQueues = new Map();

function stmnMarkRuntimeDirty(runtime = stmnStorageRuntime) {
    if (!runtime || runtime.status !== 'ready' || runtime.readOnly) return false;
    runtime.changeVersion = Number(runtime.changeVersion || 0) + 1;
    runtime.dirty = true;
    if (runtime === stmnStorageRuntime) {
        document.querySelector('#stmn-save-state')?.classList.add('is-saving');
    }
    return true;
}

function stmnContext() {
    return globalThis.SillyTavern?.getContext?.();
}

function stmnId(prefix = 'id') {
    if (globalThis.crypto?.randomUUID) {
        return `${prefix}-${crypto.randomUUID()}`;
    }
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function stmnClamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function stmnMeasureLayoutViewport() {
    const root = document.documentElement;
    return {
        width: Math.round(globalThis.innerWidth || root?.clientWidth || 1024),
        height: Math.round(globalThis.innerHeight || root?.clientHeight || 768),
    };
}

function stmnVisibleViewport() {
    const layout = stmnMeasureLayoutViewport();
    const viewport = globalThis.visualViewport;
    return {
        width: Math.round(viewport?.width || layout.width),
        height: Math.round(viewport?.height || layout.height),
        offsetLeft: Math.round(viewport?.offsetLeft || 0),
        offsetTop: Math.round(viewport?.offsetTop || 0),
    };
}

function stmnCommitStableViewport() {
    stmnStableViewport = stmnMeasureLayoutViewport();
    return stmnStableViewport;
}

function stmnViewport() {
    return stmnStableViewport || stmnCommitStableViewport();
}

function stmnMode(viewport = stmnViewport()) {
    const { width, height } = viewport;
    const shortSide = Math.min(width, height);
    const landscape = width > height;
    if (width >= 1100) return 'desktop';
    if (shortSide >= 600 && landscape) return 'tablet-landscape';
    if (shortSide >= 600) return 'tablet-portrait';
    return landscape ? 'phone-landscape' : 'phone-portrait';
}

function stmnIsSideMode(mode = stmnMode()) {
    return mode === 'desktop' || mode === 'tablet-landscape';
}

function stmnHasEditableFocus() {
    const active = document.activeElement;
    if (!(active instanceof Element)) return false;
    return Boolean(active.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])'));
}

function stmnKeyboardLikelyOpen() {
    if (!globalThis.visualViewport || !stmnHasEditableFocus()) return false;
    return stmnVisibleViewportReduced();
}

function stmnVisibleViewportReduced() {
    if (!globalThis.visualViewport) return false;
    const stable = stmnViewport();
    const visible = stmnVisibleViewport();
    const widthTolerance = Math.max(48, stable.width * 0.08);
    const heightShrink = stable.height - visible.height;
    const shrinkThreshold = Math.max(STMN_KEYBOARD_MIN_SHRINK, stable.height * STMN_KEYBOARD_SHRINK_RATIO);
    return Math.abs(stable.width - visible.width) <= widthTolerance && heightShrink >= shrinkThreshold;
}

function stmnClearKeyboardViewport(panel = document.querySelector('#stmn-panel')) {
    stmnKeyboardOpen = false;
    stmnKeyboardPanelRect = null;
    document.body?.classList.remove('stmn-keyboard-open');
    if (!panel) return;
    panel.classList.remove('stmn-keyboard-open');
    delete panel.dataset.keyboardViewport;
}

function stmnApplyKeyboardViewport(panel = document.querySelector('#stmn-panel')) {
    if (!panel || !stmnPanelOpen) return;
    const visible = stmnVisibleViewport();
    const mode = stmnMode();
    const visibleTop = visible.offsetTop;
    const visibleBottom = visibleTop + visible.height;

    if (!stmnKeyboardPanelRect) {
        const rect = panel.getBoundingClientRect();
        stmnKeyboardPanelRect = {
            top: rect.top,
            height: rect.height,
        };
    }

    stmnKeyboardOpen = true;
    document.body?.classList.add('stmn-keyboard-open');
    panel.classList.add('stmn-keyboard-open');
    panel.dataset.keyboardViewport = 'true';

    if (stmnIsSideMode(mode)) {
        panel.style.setProperty('top', `${visibleTop}px`, 'important');
        panel.style.setProperty('bottom', 'auto', 'important');
        panel.style.setProperty('height', `${Math.max(1, visible.height)}px`, 'important');
        return;
    }

    const base = stmnKeyboardPanelRect;
    const top = stmnClamp(base.top, visibleTop, Math.max(visibleTop, visibleBottom - 1));
    const height = Math.max(1, Math.min(base.height, visibleBottom - top));
    panel.style.setProperty('top', `${Math.round(top)}px`, 'important');
    panel.style.setProperty('bottom', 'auto', 'important');
    panel.style.setProperty('height', `${Math.round(height)}px`, 'important');
}

function stmnSidePanelBounds(mode, viewportWidth) {
    const minimum = 300;
    if (mode === 'tablet-landscape') {
        return {
            minimum,
            maximum: Math.max(minimum, Math.min(560, viewportWidth * 0.55, viewportWidth - 320)),
        };
    }
    return {
        minimum,
        maximum: Math.max(minimum, Math.min(620, viewportWidth * 0.62)),
    };
}

function stmnApplyTabletLandscapeSplit(panel, mode = stmnMode(), panelWidth = null) {
    const body = document.body;
    if (!body) return;
    const active = Boolean(stmnPanelOpen && panel && mode === 'tablet-landscape');
    body.classList.toggle('stmn-tablet-landscape-split', active);
    if (!active) {
        body.style.removeProperty('--stmn-tablet-panel-width');
        return;
    }
    const viewport = stmnViewport();
    const bounds = stmnSidePanelBounds(mode, viewport.width);
    const measuredWidth = panelWidth ?? panel.getBoundingClientRect().width;
    const width = stmnClamp(measuredWidth, bounds.minimum, bounds.maximum);
    body.style.setProperty('--stmn-tablet-panel-width', `${Math.round(width)}px`);
}

function stmnMobileHeightKey(mode) {
    return mode === 'tablet-portrait'
        ? 'tabletPortraitHeightRatio'
        : mode === 'phone-landscape' ? 'phoneLandscapeHeightRatio' : 'phonePortraitHeightRatio';
}

function stmnMobileTopKey(mode) {
    return mode === 'tablet-portrait'
        ? 'tabletPortraitTopRatio'
        : mode === 'phone-landscape' ? 'phoneLandscapeTopRatio' : 'phonePortraitTopRatio';
}

function stmnMobileWidthKey(mode) {
    return mode === 'tablet-portrait'
        ? 'tabletPortraitWidthRatio'
        : mode === 'phone-landscape' ? 'phoneLandscapeWidthRatio' : 'phonePortraitWidthRatio';
}

function stmnMobileLeftKey(mode) {
    return mode === 'tablet-portrait'
        ? 'tabletPortraitLeftRatio'
        : mode === 'phone-landscape' ? 'phoneLandscapeLeftRatio' : 'phonePortraitLeftRatio';
}

function stmnSettings() {
    const context = stmnContext();
    if (!context) return structuredClone(STMN_DEFAULT_SETTINGS);
    context.extensionSettings[STMN_MODULE] ??= {};
    const settings = context.extensionSettings[STMN_MODULE];
    for (const [key, value] of Object.entries(STMN_DEFAULT_SETTINGS)) {
        if (!Object.hasOwn(settings, key)) settings[key] = structuredClone(value);
    }
    if (!STMN_THEME_IDS.includes(settings.themeId)) settings.themeId = 'basic';
    settings.customTheme = stmnValidateCustomTheme(settings.customTheme, false);
    settings.customFonts = Array.isArray(settings.customFonts)
        ? settings.customFonts.map(font => stmnValidateUserFont(font, false)).filter(Boolean)
        : [];
    const fontIds = new Set(['system', ...STMN_BUILTIN_FONTS.map(font => font.id), ...settings.customFonts.map(font => font.id)]);
    if (!fontIds.has(settings.selectedFontId)) settings.selectedFontId = 'system';
    return settings;
}

function stmnSaveSettings() {
    stmnContext()?.saveSettingsDebounced?.();
}

function stmnValidColor(value, fallback, strict = false) {
    const text = typeof value === 'string' ? value.trim() : '';
    const valid = /^#[0-9a-f]{6}$/i.test(text);
    if (valid) return text;
    if (strict) throw new Error(`올바르지 않은 색상 값: ${text || '(비어 있음)'}`);
    return fallback;
}

function stmnValidateCustomTheme(input, strict = false) {
    const fallback = structuredClone(STMN_DEFAULT_SETTINGS.customTheme);
    const source = input && typeof input === 'object' ? input : {};
    const colorKeys = ['panelBg', 'panelText', 'panelBorder', 'cardBg', 'cardText', 'cardBorder', 'accent', 'buttonBg', 'editorBg'];
    const theme = {
        schema: 1,
        name: typeof source.name === 'string' && source.name.trim() ? source.name.trim().slice(0, 60) : fallback.name,
        cornerRadius: stmnClamp(Number(source.cornerRadius) || fallback.cornerRadius, 0, 24),
    };
    for (const key of colorKeys) theme[key] = stmnValidColor(source[key], fallback[key], strict);
    return theme;
}

function stmnSetTheme(themeId) {
    const settings = stmnSettings();
    settings.themeId = STMN_THEME_IDS.includes(themeId) ? themeId : 'basic';
    stmnSaveSettings();
    stmnApplyTheme();
}

function stmnApplyTheme() {
    const panel = document.querySelector('#stmn-panel');
    if (!panel) return;
    const settings = stmnSettings();
    panel.dataset.theme = settings.themeId;
    const variables = {
        '--stmn-panel-bg': 'panelBg',
        '--stmn-panel-text': 'panelText',
        '--stmn-border': 'panelBorder',
        '--stmn-card-bg': 'cardBg',
        '--stmn-card-text': 'cardText',
        '--stmn-card-border': 'cardBorder',
        '--stmn-accent': 'accent',
        '--stmn-button-bg': 'buttonBg',
        '--stmn-editor-bg': 'editorBg',
        '--stmn-radius': 'cornerRadius',
    };
    for (const [variable, key] of Object.entries(variables)) {
        if (settings.themeId === 'custom') {
            const suffix = key === 'cornerRadius' ? 'px' : '';
            panel.style.setProperty(variable, `${settings.customTheme[key]}${suffix}`);
        } else {
            panel.style.removeProperty(variable);
        }
    }
    document.querySelectorAll('#stmn-theme-select, #stmn-setting-theme').forEach(select => {
        select.value = settings.themeId;
    });
}

function stmnExportTheme() {
    const theme = stmnValidateCustomTheme(stmnSettings().customTheme);
    const payload = {
        app: 'ChatSSi MeMo',
        type: 'theme',
        version: 1,
        theme,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${theme.name.replace(/[^\p{L}\p{N}_-]+/gu, '_') || 'ChatSSi-MeMo-theme'}.json`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function stmnImportTheme(file) {
    try {
        const payload = JSON.parse(await file.text());
        if (payload?.app !== 'ChatSSi MeMo' || payload?.type !== 'theme' || payload?.version !== 1) {
            throw new Error('ChatSSi MeMo 테마 파일이 아닙니다.');
        }
        const settings = stmnSettings();
        settings.customTheme = stmnValidateCustomTheme(payload.theme, true);
        settings.themeId = 'custom';
        stmnSaveSettings();
        stmnApplyTheme();
        stmnSyncCustomThemeInputs();
        globalThis.toastr?.success?.('커스텀 테마를 가져왔습니다.');
    } catch (error) {
        console.error('[ChatSSi MeMo] Theme import failed', error);
        globalThis.toastr?.error?.(error.message || '테마를 가져오지 못했습니다.');
    }
}

function stmnSyncCustomThemeInputs() {
    const theme = stmnSettings().customTheme;
    document.querySelectorAll('[data-stmn-theme-key]').forEach(input => {
        const key = input.dataset.stmnThemeKey;
        if (Object.hasOwn(theme, key)) input.value = theme[key];
    });
}

function stmnNormalizeFontUrl(value) {
    const raw = typeof value === 'string' ? value.trim().slice(0, 2048) : '';
    if (!raw) throw new Error('웹폰트 주소를 입력해주세요.');
    const normalized = raw.startsWith('//') ? `https:${raw}` : raw;
    const parsed = new URL(normalized, globalThis.location?.href || 'https://localhost/');
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('http 또는 https 웹폰트 주소만 사용할 수 있습니다.');
    return parsed.href;
}

function stmnValidateUserFont(input, strict = false) {
    try {
        const source = input && typeof input === 'object' ? input : {};
        const name = typeof source.name === 'string' ? source.name.trim().slice(0, 80) : '';
        if (!name) throw new Error('웹폰트 이름을 입력해주세요.');
        if (/[;{}<>\n\r]/.test(name)) throw new Error('웹폰트 이름에 사용할 수 없는 문자가 있습니다.');
        const url = stmnNormalizeFontUrl(source.url);
        const id = typeof source.id === 'string' && /^user-[a-z0-9-]{4,100}$/i.test(source.id)
            ? source.id
            : stmnId('user');
        return {
            id,
            name,
            family: name,
            url,
            source: /\.css(?:$|[?#])/i.test(url) ? 'css' : 'font',
        };
    } catch (error) {
        if (strict) throw error;
        return null;
    }
}

function stmnCssString(value) {
    return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\n\r]/g, ' ')}"`;
}

function stmnFontFormat(url) {
    const path = new URL(url).pathname.toLowerCase();
    if (path.endsWith('.woff2')) return 'woff2';
    if (path.endsWith('.woff')) return 'woff';
    if (path.endsWith('.ttf')) return 'truetype';
    if (path.endsWith('.otf')) return 'opentype';
    if (path.endsWith('.eot')) return 'embedded-opentype';
    return '';
}

function stmnFontDefinition(fontId) {
    if (fontId === 'system') return null;
    const builtIn = STMN_BUILTIN_FONTS.find(font => font.id === fontId);
    if (builtIn) return builtIn;
    const custom = stmnSettings().customFonts.find(font => font.id === fontId);
    return custom ? { ...custom, label: custom.name, weight: '400' } : null;
}

function stmnSortedFonts(fonts, labelKey = 'label') {
    const collator = new Intl.Collator('ko', { numeric: true, sensitivity: 'base' });
    return [...fonts].sort((a, b) => collator.compare(a[labelKey], b[labelKey]));
}

function stmnClearActiveFontResource() {
    stmnActiveFontResource?.element?.remove();
    stmnActiveFontResource = null;
}

function stmnLoadFont(font) {
    if (!font) {
        stmnClearActiveFontResource();
        return;
    }
    const signature = `${font.id}|${font.family}|${font.url}`;
    if (stmnActiveFontResource?.signature === signature) return;
    stmnClearActiveFontResource();
    let element;
    if (font.source === 'css') {
        element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = font.url;
    } else {
        element = document.createElement('style');
        const format = stmnFontFormat(font.url);
        const formatText = format ? ` format(${stmnCssString(format)})` : '';
        element.textContent = `@font-face{font-family:${stmnCssString(font.family)};src:url(${stmnCssString(font.url)})${formatText};font-style:normal;font-weight:${font.weight || '400'};font-display:swap;}`;
    }
    element.dataset.stmnActiveFont = font.id;
    element.addEventListener('error', () => {
        console.warn('[ChatSSi MeMo] Webfont resource failed to load:', font.url);
        globalThis.toastr?.warning?.(`${font.label || font.name} 폰트를 불러오지 못했습니다.`);
    }, { once: true });
    document.head.append(element);
    stmnActiveFontResource = { signature, element };
}

function stmnRenderFontOptions() {
    const select = document.querySelector('#stmn-font-select');
    if (!select) return;
    const settings = stmnSettings();
    const systemOption = document.createElement('option');
    systemOption.value = 'system';
    systemOption.textContent = '테마 기본 글꼴';
    const builtInGroup = document.createElement('optgroup');
    builtInGroup.label = '제공 폰트';
    stmnSortedFonts(STMN_BUILTIN_FONTS).forEach(font => {
        const option = document.createElement('option');
        option.value = font.id;
        option.textContent = font.label;
        builtInGroup.append(option);
    });
    select.replaceChildren(systemOption, builtInGroup);
    if (settings.customFonts.length) {
        const customGroup = document.createElement('optgroup');
        customGroup.label = '사용자 폰트';
        stmnSortedFonts(settings.customFonts, 'name').forEach(font => {
            const option = document.createElement('option');
            option.value = font.id;
            option.textContent = font.name;
            customGroup.append(option);
        });
        select.append(customGroup);
    }
    select.value = settings.selectedFontId;
}

function stmnApplyFont() {
    const panel = document.querySelector('#stmn-panel');
    if (!panel) return;
    const settings = stmnSettings();
    const font = stmnFontDefinition(settings.selectedFontId);
    if (!font) {
        settings.selectedFontId = 'system';
        stmnClearActiveFontResource();
        panel.classList.remove('stmn-font-override');
        panel.style.removeProperty('--stmn-note-font');
    } else {
        stmnLoadFont(font);
        panel.classList.add('stmn-font-override');
        panel.style.setProperty('--stmn-note-font', `${stmnCssString(font.family)}, sans-serif`, 'important');
    }
    stmnRenderFontOptions();
}

function stmnSetFont(fontId) {
    const settings = stmnSettings();
    settings.selectedFontId = stmnFontDefinition(fontId) ? fontId : 'system';
    stmnSaveSettings();
    stmnApplyFont();
}

function stmnFontNameExists(name, exceptId = null) {
    const target = name.trim().toLocaleLowerCase();
    if (STMN_BUILTIN_FONTS.some(font => font.label.toLocaleLowerCase() === target || font.family.toLocaleLowerCase() === target)) return true;
    return stmnSettings().customFonts.some(font => font.id !== exceptId && font.name.toLocaleLowerCase() === target);
}

function stmnRenderCustomFontManager() {
    const list = document.querySelector('#stmn-user-font-list');
    if (!list) return;
    const settings = stmnSettings();
    list.replaceChildren();
    if (!settings.customFonts.length) {
        const empty = document.createElement('p');
        empty.className = 'stmn-font-empty';
        empty.textContent = '아직 추가한 사용자 폰트가 없습니다.';
        list.append(empty);
        return;
    }
    stmnSortedFonts(settings.customFonts, 'name').forEach(font => {
        const row = document.createElement('div');
        row.className = 'stmn-user-font-item';
        row.dataset.fontId = font.id;
        const name = document.createElement('input');
        name.type = 'text';
        name.maxLength = 80;
        name.value = font.name;
        name.setAttribute('aria-label', '웹폰트 이름');
        const url = document.createElement('input');
        url.type = 'url';
        url.maxLength = 2048;
        url.value = font.url;
        url.setAttribute('aria-label', '웹폰트 주소');
        const actions = document.createElement('div');
        actions.className = 'stmn-user-font-actions';
        const save = document.createElement('button');
        save.type = 'button';
        save.className = 'menu_button';
        save.textContent = '변경 저장';
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'menu_button';
        remove.textContent = '삭제';
        actions.append(save, remove);
        row.append(name, url, actions);
        list.append(row);

        save.addEventListener('click', () => {
            try {
                const updated = stmnValidateUserFont({ ...font, name: name.value, url: url.value }, true);
                if (stmnFontNameExists(updated.name, font.id)) throw new Error('이미 같은 이름의 폰트가 있습니다.');
                const index = settings.customFonts.findIndex(item => item.id === font.id);
                if (index >= 0) settings.customFonts[index] = updated;
                stmnSaveSettings();
                stmnRenderCustomFontManager();
                stmnRenderFontOptions();
                if (settings.selectedFontId === font.id) stmnApplyFont();
                globalThis.toastr?.success?.('사용자 폰트를 수정했습니다.');
            } catch (error) {
                globalThis.toastr?.error?.(error.message || '사용자 폰트를 수정하지 못했습니다.');
            }
        });
        remove.addEventListener('click', () => {
            if (globalThis.confirm && !globalThis.confirm(`‘${font.name}’ 폰트를 삭제할까요?`)) return;
            settings.customFonts = settings.customFonts.filter(item => item.id !== font.id);
            if (settings.selectedFontId === font.id) settings.selectedFontId = 'system';
            stmnSaveSettings();
            stmnRenderCustomFontManager();
            stmnApplyFont();
        });
    });
}

function stmnAddUserFont() {
    const nameInput = document.querySelector('#stmn-new-font-name');
    const urlInput = document.querySelector('#stmn-new-font-url');
    if (!nameInput || !urlInput) return;
    try {
        const font = stmnValidateUserFont({ name: nameInput.value, url: urlInput.value }, true);
        if (stmnFontNameExists(font.name)) throw new Error('이미 같은 이름의 폰트가 있습니다.');
        stmnSettings().customFonts.push(font);
        stmnSaveSettings();
        nameInput.value = '';
        urlInput.value = '';
        stmnRenderCustomFontManager();
        stmnRenderFontOptions();
        globalThis.toastr?.success?.('사용자 폰트를 추가했습니다.');
    } catch (error) {
        globalThis.toastr?.error?.(error.message || '사용자 폰트를 추가하지 못했습니다.');
    }
}

function stmnHasChat() {
    const context = stmnContext();
    if (!context) return false;
    return context.groupId !== null && context.groupId !== undefined
        || context.characterId !== null && context.characterId !== undefined
        || Boolean(context.chatId)
        || Array.isArray(context.chat) && context.chat.length > 0;
}

function stmnImageMarkup(image) {
    const name = stmnEscapeAttr(typeof image?.name === 'string' ? image.name : '이미지');
    const caption = stmnEscapeAttr(typeof image?.caption === 'string' ? image.caption : '');
    const source = typeof image?.dataUrl === 'string' && image.dataUrl.startsWith('data:image/')
        ? image.dataUrl
        : typeof image?.src === 'string' && (image.src.startsWith('/user/files/') || image.src.startsWith('data:image/')) ? image.src : '';
    const imageId = typeof image?.id === 'string' ? stmnEscapeAttr(image.id) : '';
    if (!source) return '';
    return `<span class="stmn-inline-image" data-stmn-image="true"${imageId ? ` data-stmn-image-id="${imageId}"` : ''} data-name="${name}" data-caption="${caption}" contenteditable="false" tabindex="0"><span class="stmn-inline-image-frame"><img src="${stmnEscapeAttr(source)}" alt="${caption || name}" draggable="false"><button type="button" class="stmn-inline-image-remove" data-remove-image="true" title="이미지 삭제" aria-label="이미지 삭제">×</button></span><span class="stmn-inline-image-caption" contenteditable="true" role="textbox" data-placeholder="이미지 설명">${caption}</span></span>`;
}

function stmnTextLineMarkup(html = '') {
    return `<div class="stmn-editor-line" data-stmn-line="text">${html || '<br>'}</div>`;
}

function stmnCheckLineMarkup(text = '', done = false) {
    return `<div class="stmn-editor-line stmn-check-line${done ? ' is-done' : ''}" data-stmn-line="check" data-checked="${done ? 'true' : 'false'}"><span class="stmn-inline-checkbox" contenteditable="false" role="checkbox" aria-checked="${done ? 'true' : 'false'}" tabindex="-1">${done ? '✓' : ''}</span><span class="stmn-check-content">${text || '<br>'}</span></div>`;
}

function stmnCreateCheckLineElement(done = false) {
    const line = document.createElement('div');
    line.className = `stmn-editor-line stmn-check-line${done ? ' is-done' : ''}`;
    line.dataset.stmnLine = 'check';
    line.dataset.checked = String(done);
    const marker = document.createElement('span');
    marker.className = 'stmn-inline-checkbox';
    marker.contentEditable = 'false';
    marker.setAttribute('role', 'checkbox');
    marker.setAttribute('aria-checked', String(done));
    marker.tabIndex = -1;
    marker.textContent = done ? '✓' : '';
    const content = document.createElement('span');
    content.className = 'stmn-check-content';
    content.append(document.createElement('br'));
    line.append(marker, content);
    return line;
}

function stmnEnsureEditableContent(content) {
    if (!content) return;
    const hasText = Boolean((content.textContent || '').replaceAll(STMN_TYPING_MARKER, ''));
    const hasEmbeddedContent = Boolean(content.querySelector?.('[data-stmn-image], img'));
    const hasOnlyPlaceholder = content.childNodes.length === 1 && content.firstChild?.nodeName === 'BR';
    if (!hasText && !hasEmbeddedContent && !hasOnlyPlaceholder) content.replaceChildren(document.createElement('br'));
}

function stmnEnsureCheckLine(line) {
    if (!line) return null;
    line.classList.add('stmn-editor-line', 'stmn-check-line');
    line.dataset.stmnLine = 'check';
    const done = line.dataset.checked === 'true';
    line.dataset.checked = String(done);
    line.classList.toggle('is-done', done);
    let marker = line.querySelector(':scope > .stmn-inline-checkbox');
    let content = line.querySelector(':scope > .stmn-check-content');
    if (!content) {
        content = document.createElement('span');
        content.className = 'stmn-check-content';
        const movable = [...line.childNodes].filter(child => child !== marker);
        content.append(...movable);
        line.append(content);
    }
    if (!marker) {
        marker = document.createElement('span');
        marker.className = 'stmn-inline-checkbox';
        line.prepend(marker);
    }
    marker.contentEditable = 'false';
    marker.setAttribute('role', 'checkbox');
    marker.setAttribute('aria-checked', String(done));
    marker.tabIndex = -1;
    const markerText = done ? '✓' : '';
    if (marker.textContent !== markerText) marker.textContent = markerText;
    const escapedContent = [...line.childNodes].filter(child => child !== marker && child !== content);
    if (escapedContent.length) content.append(...escapedContent);
    if (line.childNodes.length !== 2 || line.firstChild !== marker || line.lastChild !== content) {
        line.replaceChildren(marker, content);
    }
    stmnEnsureEditableContent(content);
    return content;
}

function stmnEnsureTextLine(line) {
    if (!line) return null;
    const checkContent = line.querySelector?.(':scope > .stmn-check-content');
    const marker = line.querySelector?.(':scope > .stmn-inline-checkbox');
    if (checkContent) {
        checkContent.replaceWith(...checkContent.childNodes);
    }
    marker?.remove();
    line.classList.add('stmn-editor-line');
    line.classList.remove('stmn-check-line', 'is-done');
    line.dataset.stmnLine = 'text';
    delete line.dataset.checked;
    stmnEnsureEditableContent(line);
    return line;
}

function stmnLegacyTextMarkup(html = '') {
    const source = document.createElement('div');
    source.innerHTML = stmnSanitize(html);
    const lines = [];
    let inline = document.createElement('div');
    const flushInline = () => {
        if (!inline.childNodes.length) return;
        lines.push(stmnTextLineMarkup(inline.innerHTML));
        inline = document.createElement('div');
    };
    for (const node of [...source.childNodes]) {
        if (node instanceof HTMLElement && (node.tagName === 'DIV' || node.tagName === 'P')) {
            flushInline();
            lines.push(stmnTextLineMarkup(node.innerHTML));
        } else {
            inline.append(node.cloneNode(true));
        }
    }
    flushInline();
    return lines.join('') || stmnTextLineMarkup();
}

function stmnLegacyContentHtml(note) {
    const legacy = Array.isArray(note?.blocks) && note.blocks.length
        ? note.blocks
        : [
            { type: 'text', html: typeof note?.html === 'string' ? note.html : '' },
            ...(Array.isArray(note?.checklist) ? note.checklist.map(item => ({ ...item, type: 'check' })) : []),
            ...(Array.isArray(note?.images) ? note.images.slice(0, STMN_MAX_IMAGES).map(item => ({ ...item, type: 'image' })) : []),
        ];
    const result = [];
    for (const item of legacy) {
        if (item?.type === 'check') {
            result.push(stmnCheckLineMarkup(stmnEscapeHtml(String(item.text || '')), Boolean(item.done)));
        } else if (item?.type === 'image') {
            const image = stmnImageMarkup(item);
            if (image) result.push(stmnTextLineMarkup(image));
        } else {
            result.push(stmnLegacyTextMarkup(item?.html || ''));
        }
    }
    return result.join('') || stmnTextLineMarkup();
}

function stmnNormalizeNote(note, index) {
    const normalized = {
        id: typeof note?.id === 'string' ? note.id : stmnId('note'),
        title: typeof note?.title === 'string' ? note.title : `메모 ${index + 1}`,
        contentHtml: stmnNormalizeEditorHtml(typeof note?.contentHtml === 'string' ? note.contentHtml : stmnLegacyContentHtml(note)),
        collapsed: Boolean(note?.collapsed),
        heightMode: note?.heightMode === 'manual' ? 'manual' : 'auto',
        height: Number.isFinite(note?.height) ? stmnClamp(note.height, 190, 1200) : null,
        createdAt: Number.isFinite(note?.createdAt) ? note.createdAt : Date.now(),
        updatedAt: Number.isFinite(note?.updatedAt) ? note.updatedAt : Date.now(),
        migrationSource: typeof note?.migrationSource === 'string' ? note.migrationSource : '',
    };
    if (normalized.heightMode === 'manual' && !normalized.height) normalized.height = 260;
    return normalized;
}

function stmnNormalizeStoreObject(input) {
    const store = input && typeof input === 'object'
        ? input
        : { version: STMN_VERSION, notes: [], selectedId: null };
    if (!stmnNormalizedStores.has(store)) {
        store.version = STMN_VERSION;
        store.notes = Array.isArray(store.notes) ? store.notes.map(stmnNormalizeNote) : [];
        stmnNormalizedStores.add(store);
    }
    if (!store.notes.some(note => note.id === store.selectedId)) {
        store.selectedId = store.notes[0]?.id ?? null;
    }
    return store;
}

function stmnStore(_create = true) {
    return stmnStorageRuntime?.status === 'ready'
        ? stmnNormalizeStoreObject(stmnStorageRuntime.payload.store)
        : null;
}

function stmnRequestHeaders() {
    const context = stmnContext();
    const headers = context?.getRequestHeaders?.() || globalThis.getRequestHeaders?.();
    if (!headers) throw new Error('실리태번 파일 API 인증 정보를 가져오지 못했습니다.');
    return headers;
}

function stmnUtf8ToBase64(text) {
    const bytes = new TextEncoder().encode(String(text));
    let binary = '';
    for (let index = 0; index < bytes.length; index += 0x8000) {
        binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
    }
    return btoa(binary);
}

function stmnBase64ToBytes(value) {
    const binary = atob(String(value || '').replace(/\s/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
}

function stmnBytesToBase64(bytes) {
    let binary = '';
    for (let index = 0; index < bytes.length; index += 0x8000) {
        binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
    }
    return btoa(binary);
}

const STMN_SHA256_K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

function stmnRotateRight32(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
}

function stmnSha256Fallback(input) {
    const bytes = input instanceof Uint8Array
        ? input
        : ArrayBuffer.isView(input)
            ? new Uint8Array(input.buffer, input.byteOffset, input.byteLength)
            : new Uint8Array(input);
    const paddedLength = Math.ceil((bytes.length + 9) / 64) * 64;
    const padded = new Uint8Array(paddedLength);
    padded.set(bytes);
    padded[bytes.length] = 0x80;
    const bitLength = bytes.length * 8;
    const view = new DataView(padded.buffer);
    view.setUint32(paddedLength - 8, Math.floor(bitLength / 0x100000000), false);
    view.setUint32(paddedLength - 4, bitLength >>> 0, false);

    const hash = new Uint32Array([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
        0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
    ]);
    const words = new Uint32Array(64);
    for (let offset = 0; offset < paddedLength; offset += 64) {
        for (let index = 0; index < 16; index += 1) words[index] = view.getUint32(offset + index * 4, false);
        for (let index = 16; index < 64; index += 1) {
            const before15 = words[index - 15];
            const before2 = words[index - 2];
            const sigma0 = stmnRotateRight32(before15, 7) ^ stmnRotateRight32(before15, 18) ^ (before15 >>> 3);
            const sigma1 = stmnRotateRight32(before2, 17) ^ stmnRotateRight32(before2, 19) ^ (before2 >>> 10);
            words[index] = (words[index - 16] + sigma0 + words[index - 7] + sigma1) >>> 0;
        }
        let [a, b, c, d, e, f, g, h] = hash;
        for (let index = 0; index < 64; index += 1) {
            const sum1 = stmnRotateRight32(e, 6) ^ stmnRotateRight32(e, 11) ^ stmnRotateRight32(e, 25);
            const choose = (e & f) ^ (~e & g);
            const temp1 = (h + sum1 + choose + STMN_SHA256_K[index] + words[index]) >>> 0;
            const sum0 = stmnRotateRight32(a, 2) ^ stmnRotateRight32(a, 13) ^ stmnRotateRight32(a, 22);
            const majority = (a & b) ^ (a & c) ^ (b & c);
            const temp2 = (sum0 + majority) >>> 0;
            h = g;
            g = f;
            f = e;
            e = (d + temp1) >>> 0;
            d = c;
            c = b;
            b = a;
            a = (temp1 + temp2) >>> 0;
        }
        hash[0] = (hash[0] + a) >>> 0;
        hash[1] = (hash[1] + b) >>> 0;
        hash[2] = (hash[2] + c) >>> 0;
        hash[3] = (hash[3] + d) >>> 0;
        hash[4] = (hash[4] + e) >>> 0;
        hash[5] = (hash[5] + f) >>> 0;
        hash[6] = (hash[6] + g) >>> 0;
        hash[7] = (hash[7] + h) >>> 0;
    }
    return [...hash].map(word => word.toString(16).padStart(8, '0')).join('');
}

async function stmnSha256(value) {
    const raw = typeof value === 'string' ? new TextEncoder().encode(value) : value;
    const bytes = raw instanceof Uint8Array
        ? raw
        : ArrayBuffer.isView(raw)
            ? new Uint8Array(raw.buffer, raw.byteOffset, raw.byteLength)
            : new Uint8Array(raw);
    const subtle = globalThis.crypto?.subtle;
    if (typeof subtle?.digest === 'function') {
        try {
            const digest = await subtle.digest('SHA-256', bytes);
            return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
        } catch (error) {
            console.warn('[ChatSSi MeMo] Web Crypto SHA-256 unavailable; using compatibility fallback.', error);
        }
    }
    return stmnSha256Fallback(bytes);
}

function stmnJsonForHash(payload) {
    const clone = structuredClone(payload);
    delete clone.payloadHash;
    return JSON.stringify(clone);
}

async function stmnSealPayload(payload) {
    const sealed = structuredClone(payload);
    sealed.payloadHash = await stmnSha256(stmnJsonForHash(sealed));
    return sealed;
}

async function stmnValidatePayload(payload, type, identity = null) {
    if (!payload || payload.app !== 'ChatSSi MeMo' || payload.schema !== STMN_DATA_SCHEMA || payload.type !== type) {
        throw new Error('챗시 노트 데이터파일 형식이 올바르지 않습니다.');
    }
    if (identity && String(payload.ownerId || '') !== String(identity)) {
        throw new Error('메모 소유자와 데이터파일 식별자가 일치하지 않습니다.');
    }
    if (type === 'index' && (!payload.aliases || typeof payload.aliases !== 'object' || !payload.owners || typeof payload.owners !== 'object')) {
        throw new Error('챗시 노트 인덱스 구조가 손상되었습니다.');
    }
    if (type === 'owner' && (!payload.store || !Array.isArray(payload.store.notes)
        || !payload.images || typeof payload.images !== 'object' || !Array.isArray(payload.migrations))) {
        throw new Error('챗시 노트 소유자 데이터 구조가 손상되었습니다.');
    }
    const expected = await stmnSha256(stmnJsonForHash(payload));
    if (!payload.payloadHash || payload.payloadHash !== expected) {
        throw new Error('챗시 노트 데이터파일 무결성 검증에 실패했습니다.');
    }
    return payload;
}

function stmnFileUrl(fileName) {
    return `/user/files/${encodeURIComponent(fileName)}`;
}

async function stmnReadJsonFile(fileName) {
    const response = await fetch(`${stmnFileUrl(fileName)}?stmn=${Date.now()}-${Math.random()}`, {
        method: 'GET',
        cache: 'no-store',
        credentials: 'same-origin',
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`${fileName}을(를) 읽지 못했습니다. (${response.status})`);
    return response.json();
}

async function stmnReadFileBytes(fileName) {
    const response = await fetch(`${stmnFileUrl(fileName)}?stmn=${Date.now()}-${Math.random()}`, {
        method: 'GET',
        cache: 'no-store',
        credentials: 'same-origin',
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`${fileName}을(를) 읽지 못했습니다. (${response.status})`);
    return new Uint8Array(await response.arrayBuffer());
}

async function stmnUploadBase64(fileName, data) {
    if (!/^[a-zA-Z0-9_.-]+$/.test(fileName)) throw new Error('안전하지 않은 데이터파일 이름입니다.');
    const response = await fetch('/api/files/upload', {
        method: 'POST',
        headers: stmnRequestHeaders(),
        cache: 'no-cache',
        body: JSON.stringify({ name: fileName, data }),
    });
    if (!response.ok) throw new Error(`${fileName}을(를) 저장하지 못했습니다. (${response.status})`);
    return response.json();
}

async function stmnUploadJson(fileName, payload) {
    const sealed = await stmnSealPayload(payload);
    await stmnUploadBase64(fileName, stmnUtf8ToBase64(JSON.stringify(sealed)));
    return sealed;
}

async function stmnVerifiedWriteJson(fileName, previousFileName, payload, validator) {
    const existing = await stmnReadJsonFile(fileName);
    if (existing && previousFileName) {
        await stmnUploadBase64(previousFileName, stmnUtf8ToBase64(JSON.stringify(existing)));
        const previous = await stmnReadJsonFile(previousFileName);
        if (JSON.stringify(previous) !== JSON.stringify(existing)) {
            throw new Error('이전 정상본 보존 검증에 실패했습니다.');
        }
    }
    const sealed = await stmnUploadJson(fileName, payload);
    const verified = await stmnReadJsonFile(fileName);
    await validator(verified);
    if (JSON.stringify(verified) !== JSON.stringify(sealed)) {
        throw new Error('저장 후 재검증 결과가 일치하지 않습니다.');
    }
    return verified;
}

async function stmnRecoverJsonFromPrevious(fileName, previousFileName, validator) {
    const previous = await stmnReadJsonFile(previousFileName);
    if (!previous) return null;
    await validator(previous);
    await stmnUploadBase64(fileName, stmnUtf8ToBase64(JSON.stringify(previous)));
    const restored = await stmnReadJsonFile(fileName);
    await validator(restored);
    if (JSON.stringify(restored) !== JSON.stringify(previous)) throw new Error('이전 정상본 복구 검증에 실패했습니다.');
    globalThis.toastr?.warning?.('손상되거나 누락된 메모 파일을 직전 정상본으로 복구했습니다.');
    return restored;
}

function stmnOwnerFileName(ownerId) {
    return `${STMN_OWNER_FILE_PREFIX}${ownerId}.json`;
}

function stmnOwnerPreviousFileName(ownerId) {
    return `${STMN_OWNER_FILE_PREFIX}${ownerId}.previous.json`;
}

function stmnClientId() {
    stmnClientId.value ??= stmnId('client');
    return stmnClientId.value;
}

function stmnCurrentScope() {
    const context = stmnContext();
    if (!context || !stmnHasChat()) return null;
    const chatId = context.getCurrentChatId?.() ?? context.chatId ?? '';
    if (context.groupId !== null && context.groupId !== undefined) {
        const group = context.groups?.find(item => String(item.id) === String(context.groupId));
        return {
            kind: 'group',
            label: group?.name || '그룹 채팅',
            chatId: String(chatId),
            aliases: [`group-id:${context.groupId}`],
            metadata: context.chatMetadata,
        };
    }
    const character = context.characters?.[context.characterId];
    if (!character) return null;
    const avatar = String(character.avatar || character.data?.avatar || '').trim();
    const aliases = [];
    if (avatar) aliases.push(`character-avatar:${avatar}`);
    if (!aliases.length) aliases.push(`character-fallback:${context.characterId}:${character.name || context.name2 || ''}`);
    return {
        kind: 'character',
        label: character.name || context.name2 || '캐릭터',
        chatId: String(chatId),
        aliases,
        metadata: context.chatMetadata,
    };
}

function stmnEmptyIndex() {
    return {
        app: 'ChatSSi MeMo',
        schema: STMN_DATA_SCHEMA,
        type: 'index',
        revision: 0,
        updatedAt: Date.now(),
        aliases: {},
        owners: {},
    };
}

function stmnEmptyOwner(ownerId, scope) {
    return {
        app: 'ChatSSi MeMo',
        schema: STMN_DATA_SCHEMA,
        type: 'owner',
        ownerId,
        revision: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        scope: { kind: scope.kind, label: scope.label },
        store: { version: STMN_VERSION, notes: [], selectedId: null },
        images: {},
        migrations: [],
        lease: null,
    };
}

async function stmnReadIndex() {
    let index = null;
    try {
        index = await stmnReadJsonFile(STMN_INDEX_FILE);
        if (index) await stmnValidatePayload(index, 'index');
    } catch (error) {
        console.error('[ChatSSi MeMo] Index validation failed; trying previous copy', error);
        index = await stmnRecoverJsonFromPrevious(STMN_INDEX_FILE, STMN_INDEX_PREVIOUS_FILE, value => stmnValidatePayload(value, 'index'));
        if (!index) throw error;
    }
    if (!index) {
        index = await stmnRecoverJsonFromPrevious(STMN_INDEX_FILE, STMN_INDEX_PREVIOUS_FILE, value => stmnValidatePayload(value, 'index'));
        if (!index) return stmnEmptyIndex();
    }
    index.aliases = index.aliases && typeof index.aliases === 'object' ? index.aliases : {};
    index.owners = index.owners && typeof index.owners === 'object' ? index.owners : {};
    return index;
}

async function stmnWriteIndex(index) {
    const next = structuredClone(index);
    next.revision = Number(next.revision || 0) + 1;
    next.updatedAt = Date.now();
    return stmnVerifiedWriteJson(STMN_INDEX_FILE, STMN_INDEX_PREVIOUS_FILE, next, value => stmnValidatePayload(value, 'index'));
}

function stmnQueueIndex(operation) {
    const next = stmnIndexWriteQueue.catch(() => {}).then(operation);
    stmnIndexWriteQueue = next.catch(() => {});
    return next;
}

function stmnQueueOwner(ownerId, operation) {
    const previous = stmnOwnerWriteQueues.get(ownerId) || Promise.resolve();
    const next = previous.catch(() => {}).then(operation);
    stmnOwnerWriteQueues.set(ownerId, next.catch(() => {}));
    return next;
}

async function stmnResolveOwner(scope) {
    return stmnQueueIndex(async () => {
        let index = await stmnReadIndex();
        let ownerId = scope.aliases.map(alias => index.aliases[alias]).find(Boolean) || null;
        let changed = false;
        if (!ownerId) {
            ownerId = crypto.randomUUID?.() || stmnId('owner').replace(/^owner-/, '');
            index.owners[ownerId] = {
                ownerId,
                kind: scope.kind,
                label: scope.label,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                aliases: [],
            };
            changed = true;
        }
        const owner = index.owners[ownerId] ??= {
            ownerId,
            kind: scope.kind,
            label: scope.label,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            aliases: [],
        };
        if (owner.label !== scope.label) changed = true;
        owner.label = scope.label;
        owner.updatedAt = Date.now();
        owner.aliases = Array.isArray(owner.aliases) ? owner.aliases : [];
        for (const alias of scope.aliases) {
            if (index.aliases[alias] !== ownerId) {
                index.aliases[alias] = ownerId;
                changed = true;
            }
            if (!owner.aliases.includes(alias)) {
                owner.aliases.push(alias);
                changed = true;
            }
        }
        if (changed) {
            index = await stmnWriteIndex(index);
            const winner = scope.aliases.map(alias => index.aliases[alias]).find(Boolean);
            if (winner) ownerId = winner;
        }
        const fileName = stmnOwnerFileName(ownerId);
        let payload = null;
        try {
            payload = await stmnReadJsonFile(fileName);
            if (payload) await stmnValidatePayload(payload, 'owner', ownerId);
        } catch (error) {
            console.error('[ChatSSi MeMo] Owner validation failed; trying previous copy', error);
            payload = await stmnRecoverJsonFromPrevious(
                fileName,
                stmnOwnerPreviousFileName(ownerId),
                value => stmnValidatePayload(value, 'owner', ownerId),
            );
            if (!payload) throw error;
        }
        if (!payload) {
            payload = await stmnRecoverJsonFromPrevious(
                fileName,
                stmnOwnerPreviousFileName(ownerId),
                value => stmnValidatePayload(value, 'owner', ownerId),
            ) || await stmnVerifiedWriteJson(
                    fileName,
                    stmnOwnerPreviousFileName(ownerId),
                    stmnEmptyOwner(ownerId, scope),
                    value => stmnValidatePayload(value, 'owner', ownerId),
                );
        }
        payload.store = stmnNormalizeStoreObject(payload.store);
        payload.images = payload.images && typeof payload.images === 'object' ? payload.images : {};
        payload.migrations = Array.isArray(payload.migrations) ? payload.migrations : [];
        return { index, ownerId, fileName, payload };
    });
}

function stmnLeaseIsForeign(payload) {
    const lease = payload?.lease;
    return Boolean(lease?.clientId && lease.clientId !== stmnClientId() && Number(lease.expiresAt) > Date.now());
}

function stmnNoteContentKey(note) {
    return JSON.stringify({
        title: note.title || '',
        contentHtml: note.contentHtml || '',
        heightMode: note.heightMode || 'auto',
        height: note.height || null,
    });
}

function stmnMergeStores(baseInput, incomingInput, source = '') {
    const base = stmnNormalizeStoreObject(structuredClone(baseInput));
    const incoming = stmnNormalizeStoreObject(structuredClone(incomingInput));
    const byId = new Map(base.notes.map(note => [note.id, note]));
    const byContent = new Set(base.notes.map(stmnNoteContentKey));
    let added = 0;
    let conflicts = 0;
    for (const candidate of incoming.notes) {
        const sameId = byId.get(candidate.id);
        const key = stmnNoteContentKey(candidate);
        if (sameId && stmnNoteContentKey(sameId) === key) continue;
        if (!sameId && byContent.has(key)) continue;
        const note = structuredClone(candidate);
        if (sameId) {
            note.id = stmnId('note');
            note.title = `${note.title || '메모'} (이관 충돌본)`;
            conflicts += 1;
        }
        if (source) note.migrationSource = source;
        base.notes.push(note);
        byId.set(note.id, note);
        byContent.add(stmnNoteContentKey(note));
        added += 1;
    }
    if (!base.selectedId && incoming.selectedId && byId.has(incoming.selectedId)) base.selectedId = incoming.selectedId;
    if (!base.notes.some(note => note.id === base.selectedId)) base.selectedId = base.notes[0]?.id || null;
    return { store: base, added, conflicts };
}

function stmnReconcileStoreInPlace(targetInput, sourceInput, preserveLocal = false, savedInput = null) {
    const target = stmnNormalizeStoreObject(targetInput);
    const source = stmnNormalizeStoreObject(structuredClone(sourceInput));
    const existingById = new Map(target.notes.map(note => [note.id, note]));

    if (preserveLocal) {
        const savedIds = new Set((savedInput?.notes || []).map(note => note.id));
        for (const sourceNote of source.notes) {
            if (!existingById.has(sourceNote.id) && !savedIds.has(sourceNote.id)) {
                target.notes.push(sourceNote);
                existingById.set(sourceNote.id, sourceNote);
            }
        }
        if (!target.notes.some(note => note.id === target.selectedId)) {
            target.selectedId = target.notes[0]?.id ?? null;
        }
        target.version = STMN_VERSION;
        return target;
    }

    const nextNotes = source.notes.map(sourceNote => {
        const existing = existingById.get(sourceNote.id);
        if (!existing) return sourceNote;
        for (const key of Object.keys(existing)) {
            if (!(key in sourceNote)) delete existing[key];
        }
        Object.assign(existing, sourceNote);
        return existing;
    });
    target.notes.splice(0, target.notes.length, ...nextNotes);
    target.selectedId = source.selectedId;
    target.version = STMN_VERSION;
    return target;
}

function stmnReconcileObjectInPlace(target, source, preserveLocal = false) {
    const destination = target && typeof target === 'object' && !Array.isArray(target) ? target : {};
    if (preserveLocal) {
        for (const [key, value] of Object.entries(source && typeof source === 'object' ? source : {})) {
            if (!(key in destination)) destination[key] = structuredClone(value);
        }
    } else {
        for (const key of Object.keys(destination)) delete destination[key];
        Object.assign(destination, structuredClone(source && typeof source === 'object' ? source : {}));
    }
    return destination;
}

function stmnApplyVerifiedOwnerPayload(runtime, verified, preserveLocal = false, savedStore = null) {
    const payload = runtime.payload;
    const liveStore = payload.store;
    const liveImages = payload.images && typeof payload.images === 'object' ? payload.images : {};
    const liveMigrations = Array.isArray(payload.migrations) ? payload.migrations : [];

    stmnReconcileStoreInPlace(liveStore, verified.store, preserveLocal, savedStore);
    stmnReconcileObjectInPlace(liveImages, verified.images, preserveLocal);
    if (!preserveLocal) {
        liveMigrations.splice(0, liveMigrations.length, ...structuredClone(verified.migrations || []));
    } else {
        const known = new Set(liveMigrations.map(item => `${item.sourceChatId || ''}:${item.sourceHash || ''}`));
        for (const item of verified.migrations || []) {
            const key = `${item.sourceChatId || ''}:${item.sourceHash || ''}`;
            if (!known.has(key)) liveMigrations.push(structuredClone(item));
        }
    }

    for (const [key, value] of Object.entries(verified)) {
        if (key === 'store' || key === 'images' || key === 'migrations') continue;
        payload[key] = structuredClone(value);
    }
    payload.store = liveStore;
    payload.images = liveImages;
    payload.migrations = liveMigrations;
    return payload;
}

async function stmnWriteOwner(runtime, snapshot = runtime.payload.store, options = {}) {
    const localStore = structuredClone(snapshot);
    const liveStore = runtime.payload.store;
    const liveImages = runtime.payload.images;
    const liveMigrations = runtime.payload.migrations;
    const changeVersionAtStart = Number(runtime.changeVersion || 0);
    return stmnQueueOwner(runtime.ownerId, async () => {
        const current = await stmnReadJsonFile(runtime.fileName);
        if (!current) throw new Error('메모 데이터파일이 사라졌습니다. 저장을 중단했습니다.');
        await stmnValidatePayload(current, 'owner', runtime.ownerId);
        if (stmnLeaseIsForeign(current)) {
            const error = new Error('다른 기기나 탭에서 이 메모를 편집 중입니다. 현재 창은 읽기 전용으로 전환됩니다.');
            error.code = 'STMN_LEASE_CONFLICT';
            throw error;
        }
        let store = localStore;
        if (Number(current.revision) !== Number(runtime.payload.revision) && current.lease?.clientId !== stmnClientId()) {
            store = stmnMergeStores(current.store, localStore, 'concurrent-merge').store;
        }
        const leaseToken = current.lease?.clientId === stmnClientId()
            ? current.lease.token
            : stmnId('lease');
        const next = {
            ...current,
            revision: Number(current.revision || 0) + 1,
            updatedAt: Date.now(),
            scope: structuredClone(runtime.payload.scope),
            store,
            images: { ...(current.images || {}), ...(runtime.payload.images || {}) },
            migrations: Array.isArray(options.migrations) ? options.migrations : (runtime.payload.migrations || current.migrations || []),
            lease: {
                clientId: stmnClientId(),
                token: leaseToken,
                expiresAt: Date.now() + STMN_LEASE_MS,
            },
        };
        const verified = await stmnVerifiedWriteJson(
            runtime.fileName,
            stmnOwnerPreviousFileName(runtime.ownerId),
            next,
            value => stmnValidatePayload(value, 'owner', runtime.ownerId),
        );
        const changedWhileSaving = Number(runtime.changeVersion || 0) !== changeVersionAtStart
            || JSON.stringify(liveStore) !== JSON.stringify(localStore);
        stmnApplyVerifiedOwnerPayload(runtime, verified, changedWhileSaving, localStore);
        if (changedWhileSaving) {
            runtime.dirty = true;
        }
        runtime.readOnly = false;
        stmnScheduleLeaseRenewal();
        return verified;
    });
}

function stmnScheduleLeaseRenewal() {
    if (stmnLeaseTimer) clearTimeout(stmnLeaseTimer);
    const runtime = stmnStorageRuntime;
    if (!runtime?.payload?.lease || runtime.payload.lease.clientId !== stmnClientId()) return;
    stmnLeaseTimer = setTimeout(() => {
        stmnLeaseTimer = null;
        if (runtime === stmnStorageRuntime && runtime.status === 'ready') {
            stmnWriteOwner(runtime, runtime.payload.store).catch(error => stmnHandleSaveError(runtime, error));
        }
    }, STMN_LEASE_RENEW_MS);
}

async function stmnTakeEditingLease() {
    const runtime = stmnStorageRuntime;
    if (!runtime || runtime.status !== 'ready' || !runtime.readOnly) return;
    if (!globalThis.confirm('다른 기기나 탭의 편집을 중단시키고 이 창에서 편집권을 가져올까요? 다른 곳의 아직 저장되지 않은 입력은 보존되지 않을 수 있습니다.')) return;
    try {
        const verified = await stmnQueueOwner(runtime.ownerId, async () => {
            const current = await stmnReadJsonFile(runtime.fileName);
            await stmnValidatePayload(current, 'owner', runtime.ownerId);
            const next = {
                ...current,
                revision: Number(current.revision || 0) + 1,
                updatedAt: Date.now(),
                lease: { clientId: stmnClientId(), token: stmnId('lease'), expiresAt: Date.now() + STMN_LEASE_MS },
            };
            return stmnVerifiedWriteJson(
                runtime.fileName,
                stmnOwnerPreviousFileName(runtime.ownerId),
                next,
                value => stmnValidatePayload(value, 'owner', runtime.ownerId),
            );
        });
        stmnApplyVerifiedOwnerPayload(runtime, verified, false);
        runtime.readOnly = false;
        runtime.dirty = false;
        stmnScheduleLeaseRenewal();
        stmnRenderNotes({ flush: false });
        globalThis.toastr?.success?.('이 창으로 메모 편집권을 가져왔습니다.');
    } catch (error) {
        console.error('[ChatSSi MeMo] Failed to take editing lease', error);
        globalThis.toastr?.error?.(error.message || '편집권을 가져오지 못했습니다.');
    }
}

function stmnDownloadBlob(name, blob) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function stmnPreserveConflictCopy(runtime) {
    try {
        const payload = {
            app: 'ChatSSi MeMo',
            schema: STMN_BACKUP_SCHEMA,
            type: 'conflict-copy',
            createdAt: new Date().toISOString(),
            ownerId: runtime.ownerId,
            label: runtime.scope.label,
            store: structuredClone(runtime.payload.store),
        };
        const sealed = await stmnSealBackup(payload);
        stmnDownloadBlob(`ChatSSi-MeMo_CONFLICT_${stmnTimestamp()}.backup.json`, new Blob([JSON.stringify(sealed, null, 2)], { type: 'application/json' }));
    } catch (error) {
        console.error('[ChatSSi MeMo] Failed to preserve conflict copy', error);
    }
}

async function stmnHandleSaveError(runtime, error) {
    console.error('[ChatSSi MeMo] Failed to save memo data', error);
    if (error?.code === 'STMN_LEASE_CONFLICT') {
        runtime.readOnly = true;
        await stmnPreserveConflictCopy(runtime);
        if (runtime === stmnStorageRuntime) stmnRenderNotes();
    } else if (runtime === stmnStorageRuntime) {
        setTimeout(() => {
            if (runtime === stmnStorageRuntime && runtime.dirty) void stmnSaveNow(runtime);
        }, 2500);
    }
    globalThis.toastr?.error?.(error?.message || '메모 저장에 실패했습니다.');
}

async function stmnSaveNow(runtime = stmnStorageRuntime) {
    if (stmnSaveTimer && runtime === stmnStorageRuntime) {
        clearTimeout(stmnSaveTimer);
        stmnSaveTimer = null;
    }
    if (!runtime || runtime.status !== 'ready' || runtime.readOnly || !runtime.dirty) return;
    if (runtime.savePromise) return runtime.savePromise;
    const snapshot = structuredClone(runtime.payload.store);
    const changeVersionAtStart = Number(runtime.changeVersion || 0);
    runtime.dirty = false;
    runtime.savePromise = (async () => {
        try {
            await stmnWriteOwner(runtime, snapshot);
            if (Number(runtime.changeVersion || 0) !== changeVersionAtStart) runtime.dirty = true;
            if (runtime === stmnStorageRuntime && !runtime.dirty) {
                document.querySelector('#stmn-save-state')?.classList.remove('is-saving');
            }
        } catch (error) {
            runtime.dirty = true;
            await stmnHandleSaveError(runtime, error);
        }
    })();
    try {
        await runtime.savePromise;
    } finally {
        runtime.savePromise = null;
    }
    if (runtime.dirty && !runtime.readOnly) {
        if (runtime === stmnStorageRuntime) stmnScheduleSave(0, false);
        else void stmnSaveNow(runtime);
    }
}

function stmnScheduleSave(delay = 450, markChange = true) {
    const runtimeAtSchedule = stmnStorageRuntime;
    if (!runtimeAtSchedule || runtimeAtSchedule.status !== 'ready' || runtimeAtSchedule.readOnly) return;
    if (markChange) stmnMarkRuntimeDirty(runtimeAtSchedule);
    else {
        runtimeAtSchedule.dirty = true;
        document.querySelector('#stmn-save-state')?.classList.add('is-saving');
    }
    if (stmnSaveTimer) clearTimeout(stmnSaveTimer);
    stmnSaveTimer = setTimeout(async () => {
        stmnSaveTimer = null;
        await stmnSaveNow(runtimeAtSchedule);
    }, delay);
}

function stmnParseDataUrl(dataUrl) {
    const match = /^data:(image\/[a-z0-9.+-]+);base64,([a-z0-9+/=\s]+)$/i.exec(String(dataUrl || ''));
    if (!match) throw new Error('이미지 데이터 형식이 올바르지 않습니다.');
    return { mimeType: match[1].toLowerCase(), bytes: stmnBase64ToBytes(match[2]) };
}

function stmnImageExtension(mimeType) {
    if (mimeType === 'image/webp') return 'webp';
    if (mimeType === 'image/jpeg') return 'jpg';
    if (mimeType === 'image/png') return 'png';
    if (mimeType === 'image/gif') return 'gif';
    return 'img';
}

async function stmnStoreImageFile(runtime, dataUrl, name = '이미지') {
    const parsed = stmnParseDataUrl(dataUrl);
    const sha256 = await stmnSha256(parsed.bytes);
    const existing = Object.values(runtime.payload.images || {}).find(image => image.sha256 === sha256);
    if (existing) return existing;
    const imageId = crypto.randomUUID?.() || stmnId('image').replace(/^image-/, '');
    const fileName = `${STMN_IMAGE_FILE_PREFIX}${runtime.ownerId}_${imageId}.${stmnImageExtension(parsed.mimeType)}`;
    await stmnUploadBase64(fileName, stmnBytesToBase64(parsed.bytes));
    const verifiedBytes = await stmnReadFileBytes(fileName);
    if (!verifiedBytes || await stmnSha256(verifiedBytes) !== sha256) {
        throw new Error('분리 저장한 이미지의 무결성 검증에 실패했습니다.');
    }
    const image = {
        id: imageId,
        fileName,
        mimeType: parsed.mimeType,
        sha256,
        size: parsed.bytes.byteLength,
        name: String(name || '이미지').slice(0, 240),
        createdAt: Date.now(),
    };
    runtime.payload.images[imageId] = image;
    return image;
}

async function stmnExternalizeStoreImages(runtime, inputStore) {
    const store = stmnNormalizeStoreObject(structuredClone(inputStore));
    for (const note of store.notes) {
        const holder = document.createElement('div');
        holder.innerHTML = stmnSanitizeEditorHtml(note.contentHtml);
        for (const wrapper of holder.querySelectorAll('[data-stmn-image]')) {
            const imageElement = wrapper.querySelector('img');
            const source = imageElement?.getAttribute('src') || '';
            if (!source.startsWith('data:image/')) continue;
            const image = await stmnStoreImageFile(runtime, source, wrapper.dataset.name || imageElement.alt || '이미지');
            wrapper.dataset.stmnImageId = image.id;
            imageElement.setAttribute('src', stmnFileUrl(image.fileName));
        }
        note.contentHtml = stmnNormalizeEditorHtml(holder.innerHTML);
    }
    return store;
}

async function stmnMigrateLegacyMetadata(runtime, scope) {
    const legacyRaw = scope.metadata?.[STMN_CHAT_KEY];
    if (!legacyRaw || typeof legacyRaw !== 'object' || !Array.isArray(legacyRaw.notes) || !legacyRaw.notes.length) return;
    const sourceHash = await stmnSha256(JSON.stringify(legacyRaw));
    const sourceStore = stmnNormalizeStoreObject(structuredClone(legacyRaw));
    const sourceChatId = scope.chatId || '(unknown-chat)';
    if (runtime.payload.migrations.some(item => item.sourceChatId === sourceChatId && item.sourceHash === sourceHash)) return;
    try {
        const externalized = await stmnExternalizeStoreImages(runtime, sourceStore);
        const merged = stmnMergeStores(runtime.payload.store, externalized, sourceChatId);
        const migrations = [...runtime.payload.migrations, {
            sourceChatId,
            sourceHash,
            copiedAt: Date.now(),
            notesFound: sourceStore.notes.length,
            notesAdded: merged.added,
            conflictsPreserved: merged.conflicts,
        }];
        stmnReconcileStoreInPlace(runtime.payload.store, merged.store, false);
        runtime.payload.migrations.splice(0, runtime.payload.migrations.length, ...migrations);
        await stmnWriteOwner(runtime, runtime.payload.store, { migrations: runtime.payload.migrations });
        globalThis.toastr?.success?.(`기존 채팅 메모를 안전하게 복사했습니다. (${merged.added}개 추가)`);
    } catch (error) {
        console.error('[ChatSSi MeMo] Legacy copy migration failed', error);
        globalThis.toastr?.error?.(`${error.message || '기존 메모 복사에 실패했습니다.'} 채팅 원본은 변경하지 않았습니다.`);
    }
}

function stmnResetViewState() {
    if (stmnFindRefreshTimer) clearTimeout(stmnFindRefreshTimer);
    stmnFindRefreshTimer = null;
    stmnClearFindVisuals(true);
    stmnSearch = '';
    stmnFindMatches = [];
    stmnFindIndex = -1;
    const search = document.querySelector('#stmn-search');
    if (search) search.value = '';
    stmnEditorRanges.clear();
    stmnSelectedRanges.clear();
    stmnPendingImageRanges.clear();
    stmnSelectedImages.clear();
}

async function stmnLoadCurrentStorage(scope = stmnCurrentScope()) {
    const previousRuntime = stmnStorageRuntime;
    if (previousRuntime?.status === 'ready') {
        stmnFlushVisibleEditors(previousRuntime, { schedule: false });
    }
    const token = ++stmnStorageLoadToken;
    if (stmnSaveTimer) {
        clearTimeout(stmnSaveTimer);
        stmnSaveTimer = null;
    }
    if (stmnLeaseTimer) {
        clearTimeout(stmnLeaseTimer);
        stmnLeaseTimer = null;
    }
    stmnStorageRuntime = scope ? { status: 'loading', scope } : null;
    stmnResetViewState();
    stmnRenderNotes();
    if (previousRuntime?.status === 'ready' && !previousRuntime.readOnly && previousRuntime.dirty) {
        await stmnSaveNow(previousRuntime);
        if (token !== stmnStorageLoadToken) return null;
        if (previousRuntime.dirty && !previousRuntime.readOnly) {
            await stmnPreserveConflictCopy(previousRuntime);
            setTimeout(() => { if (previousRuntime.dirty) void stmnSaveNow(previousRuntime); }, 2500);
        }
        if (stmnLeaseTimer) {
            clearTimeout(stmnLeaseTimer);
            stmnLeaseTimer = null;
        }
    }
    if (!scope) return null;
    try {
        const resolved = await stmnResolveOwner(scope);
        if (token !== stmnStorageLoadToken) return null;
        const runtime = {
            status: 'ready',
            scope,
            index: resolved.index,
            ownerId: resolved.ownerId,
            fileName: resolved.fileName,
            payload: resolved.payload,
            readOnly: stmnLeaseIsForeign(resolved.payload),
            dirty: false,
            changeVersion: 0,
            savePromise: null,
        };
        stmnStorageRuntime = runtime;
        stmnRenderNotes();
        if (!runtime.readOnly) await stmnMigrateLegacyMetadata(runtime, scope);
        if (token === stmnStorageLoadToken && stmnStorageRuntime === runtime) stmnRenderNotes();
        return runtime;
    } catch (error) {
        if (token !== stmnStorageLoadToken) return null;
        stmnStorageRuntime = { status: 'error', scope, error };
        console.error('[ChatSSi MeMo] Failed to load shared storage', error);
        stmnRenderNotes();
        globalThis.toastr?.error?.(error.message || '메모 데이터파일을 불러오지 못했습니다.');
        return null;
    }
}

async function stmnHandleCharacterRenamed(oldAvatar, newAvatar) {
    const runtime = stmnStorageRuntime;
    const scope = stmnCurrentScope();
    if (scope?.kind === 'character' && typeof newAvatar === 'string' && newAvatar.trim()) {
        scope.aliases = [`character-avatar:${newAvatar.trim()}`];
    }
    if (runtime?.scope?.kind === 'character' && typeof oldAvatar === 'string' && oldAvatar.trim()) {
        runtime.scope.aliases = [`character-avatar:${oldAvatar.trim()}`];
    }
    if (!runtime || runtime.status !== 'ready' || runtime.scope.kind !== 'character' || scope?.kind !== 'character') {
        await stmnLoadCurrentStorage(scope);
        return;
    }
    try {
        const updatedIndex = await stmnQueueIndex(async () => {
            let index = await stmnReadIndex();
            const owner = index.owners[runtime.ownerId];
            if (!owner) return index;
            const oldAliases = new Set(runtime.scope.aliases || []);
            for (const alias of oldAliases) {
                if (index.aliases[alias] === runtime.ownerId && !scope.aliases.includes(alias)) delete index.aliases[alias];
            }
            for (const alias of scope.aliases) index.aliases[alias] = runtime.ownerId;
            owner.aliases = (owner.aliases || []).filter(alias => !oldAliases.has(alias) || scope.aliases.includes(alias));
            for (const alias of scope.aliases) if (!owner.aliases.includes(alias)) owner.aliases.push(alias);
            owner.label = scope.label;
            owner.updatedAt = Date.now();
            index = await stmnWriteIndex(index);
            return index;
        });
        runtime.index = updatedIndex;
        runtime.scope = scope;
        runtime.payload.scope = { kind: scope.kind, label: scope.label };
        stmnMarkRuntimeDirty(runtime);
        await stmnSaveNow(runtime);
        stmnRenderNotes();
    } catch (error) {
        console.error('[ChatSSi MeMo] Character rename alias update failed', error);
        globalThis.toastr?.error?.('캐릭터 이름 변경에 맞춰 메모 연결을 갱신하지 못했습니다.');
    }
}

function stmnSanitize(html) {
    const purifier = globalThis.SillyTavern?.libs?.DOMPurify;
    if (!purifier) return String(html ?? '').replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    return purifier.sanitize(String(html ?? ''), {
        ALLOWED_TAGS: ['div', 'p', 'br', 'b', 'strong', 'i', 'em', 'u', 's', 'strike', 'span', 'mark', 'font'],
        ALLOWED_ATTR: ['style', 'size'],
    });
}

function stmnSanitizeEditorHtml(html) {
    const purifier = globalThis.SillyTavern?.libs?.DOMPurify;
    if (!purifier) return String(html ?? '').replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    return purifier.sanitize(String(html ?? ''), {
        ALLOWED_TAGS: ['div', 'p', 'br', 'b', 'strong', 'i', 'em', 'u', 's', 'strike', 'span', 'mark', 'font', 'img', 'button'],
        ALLOWED_ATTR: ['style', 'size', 'class', 'data-stmn-line', 'data-stmn-text-size', 'data-checked', 'data-stmn-image', 'data-stmn-image-id', 'data-name', 'data-caption', 'data-remove-image', 'data-placeholder', 'contenteditable', 'tabindex', 'role', 'aria-checked', 'aria-label', 'title', 'src', 'alt', 'draggable', 'type'],
        ALLOW_DATA_ATTR: true,
        ADD_DATA_URI_TAGS: ['img'],
    });
}

function stmnNormalizeEditorHtml(html) {
    const holder = document.createElement('div');
    holder.innerHTML = stmnSanitizeEditorHtml(html);
    const children = [...holder.childNodes];
    if (!children.length) return stmnTextLineMarkup();
    for (const child of children) {
        if (child.nodeType === Node.TEXT_NODE) {
            if (!child.textContent) child.remove();
            else {
                const line = document.createElement('div');
                line.className = 'stmn-editor-line';
                line.dataset.stmnLine = 'text';
                child.replaceWith(line);
                line.append(child);
            }
            continue;
        }
        if (!(child instanceof HTMLElement)) continue;
        if (!child.matches('div[data-stmn-line]')) {
            const line = document.createElement('div');
            line.className = 'stmn-editor-line';
            line.dataset.stmnLine = 'text';
            child.replaceWith(line);
            line.append(child);
        }
    }
    stmnRepairLiveEditor(holder);
    return holder.innerHTML || stmnTextLineMarkup();
}

function stmnPlainText(html) {
    const element = document.createElement('div');
    element.innerHTML = stmnSanitize(html);
    return element.textContent || '';
}

function stmnEscapeHtml(text) {
    const element = document.createElement('div');
    element.textContent = String(text ?? '');
    return element.innerHTML;
}

function stmnEscapeAttr(text) {
    return String(text ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    })[character]);
}

function stmnChatLabel() {
    const context = stmnContext();
    if (!context || !stmnHasChat()) return '채팅을 먼저 열어주세요';
    if (context.groupId !== null && context.groupId !== undefined) {
        return context.groups?.find(group => String(group.id) === String(context.groupId))?.name || '그룹 채팅';
    }
    return context.characters?.[context.characterId]?.name || context.name2 || '현재 채팅';
}

function stmnCreateNote({ title = '', html = '', checklistText = '' } = {}) {
    if (stmnStorageRuntime?.readOnly) {
        globalThis.toastr?.warning?.('다른 기기나 탭에서 편집 중이라 현재 창은 읽기 전용입니다.');
        return null;
    }
    const store = stmnStore();
    if (!store) {
        globalThis.toastr?.warning?.('먼저 캐릭터나 그룹 채팅을 열어주세요.');
        return null;
    }
    const note = stmnNormalizeNote({
        id: stmnId('note'),
        title: title.trim() || `메모 ${store.notes.length + 1}`,
        contentHtml: `${stmnTextLineMarkup(stmnSanitize(html))}${checklistText ? stmnCheckLineMarkup(stmnEscapeHtml(checklistText)) : ''}`,
    }, store.notes.length);
    store.notes.push(note);
    store.selectedId = note.id;
    stmnScheduleSave(0);
    stmnRenderNotes();
    requestAnimationFrame(() => document.querySelector(`[data-stmn-note-id="${note.id}"] .stmn-title-input`)?.focus());
    return note;
}

function stmnGetNote(id) {
    return stmnStore(false)?.notes.find(note => note.id === id) ?? null;
}

function stmnSelectNote(id) {
    const store = stmnStore(false);
    if (!store || !store.notes.some(note => note.id === id)) return;
    store.selectedId = id;
}

function stmnDeleteNote(id) {
    if (stmnStorageRuntime?.readOnly) return;
    const store = stmnStore(false);
    const note = stmnGetNote(id);
    if (!store || !note) return;
    if (!globalThis.confirm(`“${note.title || '제목 없는 메모'}”를 삭제할까요?`)) return;
    store.notes = store.notes.filter(item => item.id !== id);
    store.selectedId = store.notes[0]?.id ?? null;
    stmnScheduleSave(0);
    stmnRenderNotes();
}

function stmnMoveNote(id, delta) {
    if (stmnStorageRuntime?.readOnly) return;
    const store = stmnStore(false);
    if (!store) return;
    const index = store.notes.findIndex(note => note.id === id);
    const next = index + delta;
    if (index < 0 || next < 0 || next >= store.notes.length) return;
    [store.notes[index], store.notes[next]] = [store.notes[next], store.notes[index]];
    stmnScheduleSave(0);
    stmnRenderNotes();
}

function stmnSetCaret(element, edge = 'end') {
    if (!element) return;
    element.focus();
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        const offset = edge === 'start' ? 0 : element.value.length;
        element.setSelectionRange(offset, offset);
        return;
    }
    const selection = globalThis.getSelection?.();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(edge === 'start');
    selection.removeAllRanges();
    selection.addRange(range);
}
function stmnSearchableText(note) {
    const holder = document.createElement('div');
    holder.innerHTML = stmnSanitizeEditorHtml(note.contentHtml);
    const images = [...holder.querySelectorAll('[data-stmn-image]')]
        .flatMap(image => [image.dataset.name || '', image.dataset.caption || '']);
    return [note.title, holder.textContent || '', ...images].join('\n').toLocaleLowerCase();
}

function stmnFindOffsets(text, query) {
    const source = String(text || '').toLocaleLowerCase();
    const needle = String(query || '').toLocaleLowerCase();
    const offsets = [];
    if (!needle) return offsets;
    let start = 0;
    while (start <= source.length - needle.length) {
        const index = source.indexOf(needle, start);
        if (index < 0) break;
        offsets.push(index);
        start = index + Math.max(1, needle.length);
    }
    return offsets;
}

function stmnCollectTextMatches(node, query, noteId, matches) {
    if (node.nodeType === Node.TEXT_NODE) {
        for (const offset of stmnFindOffsets(node.nodeValue, query)) {
            const range = document.createRange();
            range.setStart(node, offset);
            range.setEnd(node, offset + query.length);
            matches.push({ noteId, type: 'text', range, element: node.parentElement });
        }
        return;
    }
    if (!(node instanceof HTMLElement)) return;
    if (node.matches('.stmn-inline-checkbox, .stmn-inline-image-remove')) return;
    if (node.matches('.stmn-inline-image')) {
        for (const offset of stmnFindOffsets(node.dataset.name, query)) {
            matches.push({ noteId, type: 'image', element: node, start: offset, end: offset + query.length });
        }
        const caption = node.querySelector(':scope > .stmn-inline-image-caption');
        if (caption) stmnCollectTextMatches(caption, query, noteId, matches);
        return;
    }
    for (const child of node.childNodes) stmnCollectTextMatches(child, query, noteId, matches);
}

function stmnCollectFindMatches(query) {
    const matches = [];
    document.querySelectorAll('#stmn-notes .stmn-card').forEach(card => {
        const noteId = card.dataset.stmnNoteId;
        const title = card.querySelector('.stmn-title-input');
        for (const offset of stmnFindOffsets(title?.value, query)) {
            matches.push({ noteId, type: 'title', element: title, start: offset, end: offset + query.length });
        }
        const editor = card.querySelector('.stmn-unified-editor');
        if (editor) stmnCollectTextMatches(editor, query, noteId, matches);
    });
    return matches;
}

function stmnCanUseCustomHighlights() {
    return Boolean(globalThis.CSS?.highlights && globalThis.Highlight);
}

function stmnClearFindVisuals(clearSelection = false) {
    if (stmnCanUseCustomHighlights()) {
        CSS.highlights.delete('stmn-find-all');
        CSS.highlights.delete('stmn-find-current');
    }
    document.querySelectorAll('.stmn-has-find-match, .stmn-is-find-current, .stmn-is-find-revealed').forEach(element => {
        element.classList.remove('stmn-has-find-match', 'stmn-is-find-current', 'stmn-is-find-revealed');
    });
    if (clearSelection && stmnFindSelectionActive) {
        globalThis.getSelection?.()?.removeAllRanges();
        stmnFindSelectionActive = false;
    }
}

function stmnUpdateFindControls() {
    const query = stmnSearch.trim();
    const count = document.querySelector('#stmn-result-count');
    const previous = document.querySelector('#stmn-find-prev');
    const next = document.querySelector('#stmn-find-next');
    if (!count || !previous || !next) return;
    previous.hidden = !query;
    next.hidden = !query;
    previous.disabled = !stmnFindMatches.length;
    next.disabled = !stmnFindMatches.length;
    if (query) count.textContent = stmnFindMatches.length ? `${stmnFindIndex + 1}/${stmnFindMatches.length}` : '0/0';
}

function stmnApplyAllFindHighlights() {
    if (stmnCanUseCustomHighlights()) {
        const ranges = stmnFindMatches.filter(match => match.range).map(match => match.range);
        if (ranges.length) {
            const highlight = new Highlight(...ranges);
            highlight.priority = 1;
            CSS.highlights.set('stmn-find-all', highlight);
        }
    }
    stmnFindMatches.filter(match => match.type !== 'text').forEach(match => match.element?.classList.add('stmn-has-find-match'));
}

function stmnActivateFindMatch(index, { scroll = true, select = true } = {}) {
    if (!stmnFindMatches.length) {
        stmnFindIndex = -1;
        stmnUpdateFindControls();
        return;
    }
    stmnFindIndex = (index + stmnFindMatches.length) % stmnFindMatches.length;
    if (stmnCanUseCustomHighlights()) CSS.highlights.delete('stmn-find-current');
    document.querySelectorAll('.stmn-is-find-current, .stmn-is-find-revealed').forEach(element => {
        element.classList.remove('stmn-is-find-current', 'stmn-is-find-revealed');
    });
    const match = stmnFindMatches[stmnFindIndex];
    const card = document.querySelector(`[data-stmn-note-id="${match.noteId}"]`);
    card?.classList.add('stmn-is-find-revealed');
    if (match.range) {
        if (stmnCanUseCustomHighlights()) {
            const current = new Highlight(match.range);
            current.priority = 2;
            CSS.highlights.set('stmn-find-current', current);
        }
    } else if (match.element) {
        match.element.classList.add('stmn-is-find-current');
    }
    if (select && match.range) {
        const selection = globalThis.getSelection?.();
        selection?.removeAllRanges();
        selection?.addRange(match.range.cloneRange());
        stmnFindSelectionActive = true;
    } else if (select && match.type === 'title') {
        match.element.focus({ preventScroll: true });
        match.element.setSelectionRange(match.start, match.end);
        stmnFindSelectionActive = true;
    }
    stmnUpdateFindControls();
    if (scroll) {
        requestAnimationFrame(() => {
            const target = match.type === 'text'
                ? match.range.startContainer.parentElement
                : match.element;
            target?.scrollIntoView?.({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        });
    }
}

function stmnRefreshFindMatches({ reset = false, scroll = false, select = false } = {}) {
    const query = stmnSearch.trim();
    stmnClearFindVisuals(!query);
    if (!query) {
        stmnFindMatches = [];
        stmnFindIndex = -1;
        stmnUpdateFindControls();
        return;
    }
    const previousIndex = stmnFindIndex;
    stmnFindMatches = stmnCollectFindMatches(query);
    stmnFindIndex = reset || previousIndex < 0 ? 0 : Math.min(previousIndex, stmnFindMatches.length - 1);
    stmnApplyAllFindHighlights();
    stmnActivateFindMatch(stmnFindIndex, { scroll, select });
}

function stmnMoveFind(delta) {
    if (!stmnFindMatches.length) return;
    stmnActivateFindMatch(stmnFindIndex + delta, { scroll: true, select: true });
}

function stmnScheduleFindRefresh() {
    if (!stmnSearch.trim()) return;
    if (stmnFindRefreshTimer) clearTimeout(stmnFindRefreshTimer);
    stmnFindRefreshTimer = setTimeout(() => {
        stmnFindRefreshTimer = null;
        stmnRefreshFindMatches();
    }, 80);
}

function stmnCardTemplate(note, index, total) {
    const readOnly = Boolean(stmnStorageRuntime?.readOnly);
    const card = document.createElement('article');
    card.className = `stmn-card${note.collapsed ? ' is-collapsed' : ''}${readOnly ? ' is-read-only' : ''}`;
    card.dataset.stmnNoteId = note.id;
    if (note.heightMode === 'manual' && !note.collapsed) {
        card.classList.add('is-manual-height');
        card.style.height = `${note.height}px`;
    }
    card.innerHTML = `
        <div class="stmn-card-head">
            <input class="stmn-title-input" type="text" maxlength="120" aria-label="메모 제목">
            <div class="stmn-card-actions">
                <button type="button" class="stmn-tool-button stmn-auto-height-button" data-action="auto-height" title="내용에 맞게 카드 높이 자동 조절">↕ 자동</button>
                <button type="button" class="stmn-icon-button" data-action="move-up" title="위로" ${index === 0 ? 'disabled' : ''}>▲</button>
                <button type="button" class="stmn-icon-button" data-action="move-down" title="아래로" ${index === total - 1 ? 'disabled' : ''}>▼</button>
                <button type="button" class="stmn-icon-button" data-action="collapse" title="접기/펼치기">${note.collapsed ? '＋' : '－'}</button>
                <button type="button" class="stmn-icon-button is-danger" data-action="delete" title="삭제">×</button>
            </div>
        </div>
        <div class="stmn-format-row" aria-label="글자 서식">
            <span>서식</span>
            <button type="button" class="stmn-tool-button stmn-check-tool-button" data-action="toggle-check" title="체크리스트 전환" aria-label="체크리스트 전환">☑</button>
            <button type="button" class="stmn-format-button" data-format-command="bold" aria-pressed="false" title="굵게"><strong>B</strong></button>
            <button type="button" class="stmn-format-button" data-format-command="italic" aria-pressed="false" title="기울이기"><em>I</em></button>
            <button type="button" class="stmn-format-button" data-format-command="underline" aria-pressed="false" title="밑줄"><u>U</u></button>
            <button type="button" class="stmn-format-button" data-format-command="strikeThrough" aria-pressed="false" title="취소선"><s>S</s></button>
            <button type="button" class="stmn-tool-button stmn-image-tool-button" data-action="add-image" title="이미지 삽입" aria-label="이미지 삽입">🖼️</button>
            <label class="stmn-format-size-label" title="글씨 크기">
                <span>크기</span>
                <select class="stmn-format-size" data-format-size aria-label="글씨 크기">
                    <option value="" selected>글씨 크기</option>
                    ${STMN_TEXT_SIZES.map(size => `<option value="${size.id}">${size.label}</option>`).join('')}
                </select>
            </label>
        </div>
        <div class="stmn-highlight-row" aria-label="형광펜">
            <span>형광펜</span>
            ${STMN_HIGHLIGHTS.map(color => `<button type="button" class="stmn-highlight" data-highlight="${color}" style="--stmn-highlight:${color}" title="선택한 글자 강조 · 같은 색을 다시 누르면 지우기"></button>`).join('')}
            <button type="button" class="stmn-highlight-clear" data-highlight="transparent" title="형광펜 지우기">지우기</button>
        </div>
        <div class="stmn-card-main"><div class="stmn-unified-editor" contenteditable="${readOnly ? 'false' : 'true'}" role="textbox" aria-multiline="true" data-placeholder="메모 내용을 입력하세요"></div></div>
        <div class="stmn-overflow-mark" aria-hidden="true">…</div>
        <div class="stmn-card-resizer" title="위아래로 드래그해 메모 높이 조절"></div>
        <input class="stmn-image-input" type="file" accept="image/*" hidden>
    `;
    card.querySelector('.stmn-title-input').value = note.title;
    card.querySelector('.stmn-unified-editor').innerHTML = stmnNormalizeEditorHtml(note.contentHtml);
    if (readOnly) {
        card.querySelector('.stmn-title-input').readOnly = true;
        card.querySelectorAll('button, select, .stmn-image-input').forEach(control => { control.disabled = true; });
        card.querySelectorAll('[contenteditable="true"]').forEach(element => { element.contentEditable = 'false'; });
    }
    stmnBindCard(card, note);
    return card;
}

function stmnCaretOffset(element) {
    const selection = globalThis.getSelection?.();
    if (!selection?.rangeCount) return null;
    const range = selection.getRangeAt(0);
    if (!range.collapsed || !element.contains(range.commonAncestorContainer)) return null;
    const before = document.createRange();
    before.selectNodeContents(element);
    before.setEnd(range.startContainer, range.startOffset);
    return before.toString().length;
}

function stmnCaretAtBoundary(element, edge) {
    const offset = stmnCaretOffset(element);
    if (offset === null) return false;
    return edge === 'start' ? offset === 0 : offset === (element.textContent || '').length;
}

function stmnSetCaretAtTextOffset(element, offset) {
    element.focus();
    const selection = globalThis.getSelection?.();
    if (!selection) return;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let remaining = Math.max(0, offset);
    let node;
    while ((node = walker.nextNode())) {
        if (remaining <= node.nodeValue.length) {
            const range = document.createRange();
            range.setStart(node, remaining);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }
        remaining -= node.nodeValue.length;
    }
    if (element.matches?.('.stmn-check-content')) {
        if (element.childNodes.length === 1 && element.firstChild?.nodeName === 'BR') {
            const range = document.createRange();
            range.setStart(element, 0);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }
        const textNode = document.createTextNode('');
        element.append(textNode);
        const range = document.createRange();
        range.setStart(textNode, 0);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        return;
    }
    stmnSetCaret(element, 'end');
}

function stmnEditorFor(noteId) {
    return document.querySelector(`[data-stmn-note-id="${noteId}"] .stmn-unified-editor`);
}

function stmnLineFromNode(node, editor) {
    const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;
    const line = element?.closest?.('[data-stmn-line]');
    return line && editor.contains(line) ? line : null;
}

function stmnRememberEditorSelection(noteId, editor) {
    const selection = globalThis.getSelection?.();
    if (!selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) return;
    stmnEditorRanges.set(noteId, range.cloneRange());
    if (!range.collapsed) stmnSelectedRanges.set(noteId, range.cloneRange());
    else stmnSelectedRanges.delete(noteId);
}

function stmnUsableRange(noteId, editor, allowSelection = true) {
    const selection = globalThis.getSelection?.();
    const live = selection?.rangeCount ? selection.getRangeAt(0) : null;
    if (live && editor.contains(live.commonAncestorContainer) && (allowSelection || live.collapsed)) return live;
    const saved = stmnEditorRanges.get(noteId);
    return saved && editor.contains(saved.commonAncestorContainer) ? saved : null;
}

function stmnNormalizeTextSizeMarkup(root) {
    root?.querySelectorAll?.('font[size], [style*="font-size" i]').forEach(element => {
        const value = element.getAttribute('size') || element.style.fontSize;
        const normalized = String(value || '').trim().toLowerCase();
        const sizeId = STMN_TEXT_SIZE_ALIASES[normalized];
        if (!sizeId) return;
        element.dataset.stmnTextSize = sizeId;
        element.removeAttribute('size');
        element.style.removeProperty('font-size');
        if (!element.getAttribute('style')) element.removeAttribute('style');
    });
}

function stmnRemoveTypingMarkerCharacters(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        let index = node.nodeValue.indexOf(STMN_TYPING_MARKER);
        while (index !== -1) {
            node.deleteData(index, 1);
            index = node.nodeValue.indexOf(STMN_TYPING_MARKER);
        }
    }
}

function stmnCleanupTextSizeTypingMarkers(root, removeEmpty = false) {
    root?.querySelectorAll?.('[data-stmn-typing-size]').forEach(marker => {
        const realText = (marker.textContent || '').replaceAll(STMN_TYPING_MARKER, '');
        const hasEmbeddedContent = Boolean(marker.querySelector('img, br, [data-stmn-image]'));
        if (!realText && !hasEmbeddedContent && !removeEmpty && marker.textContent.includes(STMN_TYPING_MARKER)) return;
        stmnRemoveTypingMarkerCharacters(marker);
        marker.removeAttribute('data-stmn-typing-size');
        if (!marker.textContent && !marker.childElementCount) marker.remove();
    });
}

function stmnTextNodeCanReceiveSize(node, editor) {
    const parent = node?.parentElement;
    if (!parent || !editor.contains(node)) return false;
    return !parent.closest('.stmn-inline-checkbox, .stmn-inline-image-frame, .stmn-inline-image-remove');
}

function stmnTextNodesInRange(range, editor) {
    const nodes = [];
    const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.nodeValue || !stmnTextNodeCanReceiveSize(node, editor)) return NodeFilter.FILTER_REJECT;
            try {
                return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            } catch {
                return NodeFilter.FILTER_REJECT;
            }
        },
    });
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
}

function stmnApplyTextSizeToRange(range, editor, sizeId) {
    if (!range || range.collapsed) return range;
    const portions = stmnTextNodesInRange(range, editor).map(node => {
        const start = node === range.startContainer ? range.startOffset : 0;
        const end = node === range.endContainer ? range.endOffset : node.nodeValue.length;
        return { node, start, end };
    }).filter(portion => portion.end > portion.start);
    const wrappedTextNodes = [];
    for (const portion of portions.reverse()) {
        const { node, start, end } = portion;
        if (end < node.nodeValue.length) node.splitText(end);
        const selected = start > 0 ? node.splitText(start) : node;
        const wrapper = document.createElement('span');
        wrapper.dataset.stmnTextSize = sizeId;
        selected.replaceWith(wrapper);
        wrapper.append(selected);
        wrappedTextNodes.unshift(selected);
    }
    if (!wrappedTextNodes.length) return range;
    const nextRange = document.createRange();
    nextRange.setStart(wrappedTextNodes[0], 0);
    const last = wrappedTextNodes.at(-1);
    nextRange.setEnd(last, last.nodeValue.length);
    const selection = globalThis.getSelection?.();
    selection?.removeAllRanges();
    selection?.addRange(nextRange);
    return nextRange;
}

function stmnInsertTextSizeTypingMarker(range, editor, sizeId) {
    if (!range?.collapsed) return range;
    const startElement = range.startContainer.nodeType === Node.ELEMENT_NODE
        ? range.startContainer
        : range.startContainer.parentElement;
    const activeMarker = startElement?.closest?.('[data-stmn-typing-size]');
    if (activeMarker && editor.contains(activeMarker)) {
        activeMarker.dataset.stmnTextSize = sizeId;
        if (!activeMarker.textContent.includes(STMN_TYPING_MARKER)) activeMarker.append(document.createTextNode(STMN_TYPING_MARKER));
        const textNode = [...activeMarker.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.includes(STMN_TYPING_MARKER))
            || [...activeMarker.childNodes].find(node => node.nodeType === Node.TEXT_NODE)
            || activeMarker.appendChild(document.createTextNode(STMN_TYPING_MARKER));
        const nextRange = document.createRange();
        nextRange.setStart(textNode, textNode.nodeValue.length);
        nextRange.collapse(true);
        const selection = globalThis.getSelection?.();
        selection?.removeAllRanges();
        selection?.addRange(nextRange);
        return nextRange;
    }
    const marker = document.createElement('span');
    marker.dataset.stmnTextSize = sizeId;
    marker.dataset.stmnTypingSize = 'true';
    const text = document.createTextNode(STMN_TYPING_MARKER);
    marker.append(text);
    range.insertNode(marker);
    const nextRange = document.createRange();
    nextRange.setStart(text, text.nodeValue.length);
    nextRange.collapse(true);
    const selection = globalThis.getSelection?.();
    selection?.removeAllRanges();
    selection?.addRange(nextRange);
    return nextRange;
}

function stmnRepairLiveEditor(editor) {
    if (!editor) return;
    stmnNormalizeTextSizeMarkup(editor);
    if (!editor.childNodes.length) editor.innerHTML = stmnTextLineMarkup();
    for (const node of [...editor.childNodes]) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (!node.textContent) {
                node.remove();
                continue;
            }
            const line = document.createElement('div');
            line.className = 'stmn-editor-line';
            line.dataset.stmnLine = 'text';
            node.replaceWith(line);
            line.append(node);
            continue;
        }
        if (!(node instanceof HTMLElement)) continue;
        if (node.tagName !== 'DIV') {
            const line = document.createElement('div');
            line.className = 'stmn-editor-line';
            line.dataset.stmnLine = 'text';
            node.replaceWith(line);
            line.append(node);
            continue;
        }
        if (!node.dataset.stmnLine) node.dataset.stmnLine = 'text';
        if (node.dataset.stmnLine === 'check') stmnEnsureCheckLine(node);
        else stmnEnsureTextLine(node);
    }
    if (!editor.childNodes.length) editor.innerHTML = stmnTextLineMarkup();
}

function stmnSyncEditor(note, editor, immediate = false) {
    stmnRepairLiveEditor(editor);
    note.contentHtml = stmnEditorHtmlForStorage(editor);
    note.updatedAt = Date.now();
    stmnScheduleSave(immediate ? 0 : 450);
    stmnScheduleFindRefresh();
}

function stmnEditorHtmlForStorage(editor, normalize = false) {
    const clean = editor.cloneNode(true);
    stmnCleanupTextSizeTypingMarkers(clean, true);
    clean.querySelectorAll('.stmn-has-find-match, .stmn-is-find-current').forEach(element => {
        element.classList.remove('stmn-has-find-match', 'stmn-is-find-current');
    });
    return normalize ? stmnNormalizeEditorHtml(clean.innerHTML) : stmnSanitizeEditorHtml(clean.innerHTML);
}

function stmnCancelCompositionSync(editor) {
    if (!editor) return;
    if (editor.__stmnCompositionSyncTimer !== null && editor.__stmnCompositionSyncTimer !== undefined) {
        clearTimeout(editor.__stmnCompositionSyncTimer);
    }
    editor.__stmnCompositionSyncTimer = null;
    stmnComposingEditors.delete(editor);
    stmnSettlingEditors.delete(editor);
}

function stmnFlushVisibleEditors(runtime = stmnStorageRuntime, { schedule = true } = {}) {
    if (!runtime || runtime.status !== 'ready' || runtime.readOnly) return false;
    const list = document.querySelector('#stmn-notes');
    if (!list || (list.dataset.stmnOwnerId && list.dataset.stmnOwnerId !== runtime.ownerId)) return false;
    let changed = false;
    for (const card of list.querySelectorAll('[data-stmn-note-id]')) {
        const note = runtime.payload.store.notes.find(item => item.id === card.dataset.stmnNoteId);
        if (!note) continue;
        const title = card.querySelector('.stmn-title-input');
        const editor = card.querySelector('.stmn-unified-editor');
        if (editor) stmnCancelCompositionSync(editor);
        const nextTitle = title?.value ?? note.title;
        const nextHtml = editor ? stmnEditorHtmlForStorage(editor, true) : note.contentHtml;
        if (note.title === nextTitle && note.contentHtml === nextHtml) continue;
        note.title = nextTitle;
        note.contentHtml = nextHtml;
        note.updatedAt = Date.now();
        changed = true;
    }
    if (changed) {
        stmnMarkRuntimeDirty(runtime);
        if (schedule && runtime === stmnStorageRuntime) stmnScheduleSave(0, false);
    }
    return changed;
}

function stmnLineContent(line) {
    return line.dataset.stmnLine === 'check' ? line.querySelector(':scope > .stmn-check-content') : line;
}

function stmnCaretOffsetIn(element, range) {
    if (!element || !range || !element.contains(range.startContainer)) return (element?.textContent || '').length;
    const before = document.createRange();
    before.selectNodeContents(element);
    before.setEnd(range.startContainer, range.startOffset);
    return before.toString().length;
}

function stmnConvertLine(line, type, caretOffset = 0) {
    if (!line) return null;
    if (line.dataset.stmnLine === 'check') stmnEnsureCheckLine(line);
    else stmnEnsureTextLine(line);
    const oldContent = stmnLineContent(line);
    const fragment = document.createDocumentFragment();
    fragment.append(...oldContent.childNodes);
    line.replaceChildren();
    line.className = 'stmn-editor-line';
    line.dataset.stmnLine = type;
    delete line.dataset.checked;
    if (type === 'check') {
        const template = stmnCreateCheckLineElement(false);
        const marker = template.querySelector(':scope > .stmn-inline-checkbox');
        const content = template.querySelector(':scope > .stmn-check-content');
        content.replaceChildren();
        content.append(fragment);
        stmnEnsureEditableContent(content);
        line.className = template.className;
        line.dataset.stmnLine = 'check';
        line.dataset.checked = 'false';
        line.append(marker, content);
        return content;
    }
    line.append(fragment);
    stmnEnsureEditableContent(line);
    return line;
}

function stmnToggleChecklist(note, editor, text = null) {
    let range = stmnUsableRange(note.id, editor);
    editor.focus();
    let line = stmnLineFromNode(range?.startContainer, editor) || editor.querySelector('[data-stmn-line]:last-child');
    if (!line) {
        editor.innerHTML = stmnTextLineMarkup();
        line = editor.lastElementChild;
    }
    const content = stmnLineContent(line);
    const offset = stmnCaretOffsetIn(content, range);
    let target = stmnConvertLine(line, line.dataset.stmnLine === 'check' ? 'text' : 'check', offset);
    if (text !== null) {
        target = stmnLineContent(line);
        target.textContent = text;
    }
    stmnSyncEditor(note, editor, true);
    if (text !== null) stmnSetCaret(target, 'end');
    else stmnSetCaretAtTextOffset(target, offset);
    stmnRememberEditorSelection(note.id, editor);
}

function stmnAppendChecklist(note, text = '') {
    if (stmnStorageRuntime?.readOnly) return;
    const editor = stmnEditorFor(note.id);
    if (!editor) {
        note.contentHtml = `${note.contentHtml}${stmnCheckLineMarkup(stmnEscapeHtml(text))}`;
        note.updatedAt = Date.now();
        stmnScheduleSave(0);
        stmnRenderNotes();
        return;
    }
    const line = stmnCreateCheckLineElement(false);
    editor.append(line);
    const content = stmnLineContent(line);
    content.textContent = text;
    stmnEnsureEditableContent(content);
    stmnSyncEditor(note, editor, true);
    stmnSetCaretAtTextOffset(content, (content.textContent || '').length);
    stmnRememberEditorSelection(note.id, editor);
}

function stmnSplitCheckLineAtRange(line, range) {
    const content = stmnEnsureCheckLine(line);
    const next = stmnCreateCheckLineElement(false);
    const nextContent = stmnLineContent(next);
    const splitRange = range.cloneRange();
    if (!content.contains(splitRange.startContainer)) {
        splitRange.selectNodeContents(content);
        splitRange.collapse(false);
    }
    const tailRange = document.createRange();
    tailRange.selectNodeContents(content);
    tailRange.setStart(splitRange.startContainer, splitRange.startOffset);
    const tail = tailRange.extractContents();
    nextContent.replaceChildren(tail);
    stmnEnsureEditableContent(content);
    stmnEnsureEditableContent(nextContent);
    line.after(next);
    return next;
}

function stmnHandleChecklistBeforeInput(event, note, editor) {
    if (event.isComposing || event.keyCode === 229 || stmnComposingEditors.has(editor)) return false;
    if (event.inputType !== 'deleteContentBackward' && event.inputType !== 'insertParagraph') return false;
    const selection = globalThis.getSelection?.();
    if (!selection?.rangeCount || !selection.isCollapsed) return false;
    const range = selection.getRangeAt(0);
    const line = stmnLineFromNode(range.startContainer, editor);
    if (!line || line.dataset.stmnLine !== 'check') return false;
    const content = stmnLineContent(line);
    const offset = stmnCaretOffsetIn(content, range);
    if (event.inputType === 'deleteContentBackward' && offset === 0) {
        event.preventDefault();
        const target = stmnConvertLine(line, 'text', 0);
        stmnSyncEditor(note, editor, true);
        stmnSetCaretAtTextOffset(target, 0);
        stmnRememberEditorSelection(note.id, editor);
        return true;
    }
    if (event.inputType !== 'insertParagraph') return false;
    event.preventDefault();
    const value = (content.textContent || '').replace(/\u200B/g, '');
    if (!value.trim() && !content.querySelector('[data-stmn-image]')) {
        const target = stmnConvertLine(line, 'text', 0);
        stmnSyncEditor(note, editor, true);
        stmnSetCaretAtTextOffset(target, 0);
        stmnRememberEditorSelection(note.id, editor);
        return true;
    }
    const next = stmnSplitCheckLineAtRange(line, range);
    const nextContent = stmnLineContent(next);
    stmnSyncEditor(note, editor, true);
    stmnSetCaretAtTextOffset(nextContent, 0);
    stmnRememberEditorSelection(note.id, editor);
    return true;
}

function stmnRemoveInlineImage(note, editor, image) {
    if (!image) return;
    const line = image.closest('[data-stmn-line]');
    image.remove();
    if (line) stmnEnsureEditableContent(stmnLineContent(line));
    stmnSelectedImages.delete(note.id);
    stmnSyncEditor(note, editor, true);
    editor.focus();
}

function stmnAdjacentInlineImage(range, direction) {
    if (!range?.collapsed) return null;
    let candidate = null;
    const container = range.startContainer;
    if (container.nodeType === Node.TEXT_NODE) {
        if (direction < 0 && range.startOffset === 0) candidate = container.previousSibling;
        if (direction > 0 && range.startOffset === container.nodeValue.length) candidate = container.nextSibling;
    } else if (container.nodeType === Node.ELEMENT_NODE) {
        const index = direction < 0 ? range.startOffset - 1 : range.startOffset;
        candidate = container.childNodes[index] || null;
    }
    while (candidate?.nodeType === Node.TEXT_NODE && !candidate.nodeValue.replace(/\u200B/g, '')) {
        candidate = direction < 0 ? candidate.previousSibling : candidate.nextSibling;
    }
    return candidate instanceof HTMLElement && candidate.matches('.stmn-inline-image') ? candidate : null;
}

function stmnBindCard(card, note) {
    const fileInput = card.querySelector('.stmn-image-input');
    const editor = card.querySelector('.stmn-unified-editor');
    card.addEventListener('pointerdown', event => {
        stmnSelectNote(note.id);
        if (!event.target.closest('.stmn-inline-image') || event.target.closest('.stmn-inline-image-caption')) {
            card.querySelectorAll('.stmn-inline-image.is-selected').forEach(element => element.classList.remove('is-selected'));
            stmnSelectedImages.delete(note.id);
        }
    });
    card.querySelector('.stmn-title-input').addEventListener('input', event => {
        note.title = event.target.value;
        note.updatedAt = Date.now();
        stmnScheduleSave();
        stmnScheduleFindRefresh();
    });
    card.querySelector('.stmn-title-input').addEventListener('blur', () => { void stmnSaveNow(); });

    editor.addEventListener('focus', () => {
        card.classList.add('is-editing');
        stmnUpdateFormatControls(card, editor);
    });
    editor.addEventListener('blur', async event => {
        stmnCancelCompositionSync(editor);
        card.classList.remove('is-editing');
        if (!event.relatedTarget?.closest?.('[data-format-size]')) stmnCleanupTextSizeTypingMarkers(editor, true);
        const nextHtml = stmnEditorHtmlForStorage(editor, true);
        if (note.contentHtml !== nextHtml) {
            note.contentHtml = nextHtml;
            note.updatedAt = Date.now();
            stmnScheduleSave(0);
        }
        await stmnSaveNow();
        stmnUpdateOverflow(card);
    });
    const syncEditorInput = event => {
        const activeCaption = event.target.closest?.('.stmn-inline-image-caption');
        const activeImage = activeCaption?.closest?.('.stmn-inline-image');
        if (activeCaption && activeImage) {
            activeImage.dataset.caption = (activeCaption.textContent || '').slice(0, 200);
            const image = activeImage.querySelector('img');
            if (image) image.alt = activeImage.dataset.caption || activeImage.dataset.name || '이미지';
        }
        stmnCleanupTextSizeTypingMarkers(editor);
        stmnRememberEditorSelection(note.id, editor);
        stmnSyncEditor(note, editor);
        stmnUpdateOverflow(card);
        stmnUpdateFormatControls(card, editor);
    };
    const scheduleCompositionSync = event => {
        const target = event.target || editor;
        if (editor.__stmnCompositionSyncTimer !== null && editor.__stmnCompositionSyncTimer !== undefined) {
            clearTimeout(editor.__stmnCompositionSyncTimer);
        }
        editor.__stmnCompositionSyncTimer = setTimeout(() => {
            editor.__stmnCompositionSyncTimer = null;
            stmnSettlingEditors.delete(editor);
            if (!stmnComposingEditors.has(editor)) syncEditorInput({ target });
        }, STMN_IME_SETTLE_MS);
    };
    editor.addEventListener('compositionstart', () => {
        if (editor.__stmnCompositionSyncTimer !== null && editor.__stmnCompositionSyncTimer !== undefined) {
            clearTimeout(editor.__stmnCompositionSyncTimer);
        }
        editor.__stmnCompositionSyncTimer = null;
        stmnSettlingEditors.delete(editor);
        stmnComposingEditors.add(editor);
    });
    editor.addEventListener('compositionend', event => {
        stmnComposingEditors.delete(editor);
        stmnSettlingEditors.add(editor);
        scheduleCompositionSync(event);
    });
    editor.addEventListener('input', event => {
        if (event.isComposing || stmnComposingEditors.has(editor)) return;
        if (editor.__stmnCompositionSyncTimer !== null && editor.__stmnCompositionSyncTimer !== undefined) {
            scheduleCompositionSync(event);
            return;
        }
        syncEditorInput(event);
    });
    editor.addEventListener('beforeinput', event => {
        if (event.target.closest?.('.stmn-inline-image-caption')) return;
        if (event.isComposing || stmnComposingEditors.has(editor)) return;
        if (event.inputType !== 'insertParagraph' && event.inputType !== 'deleteContentBackward') return;
        if (editor.__stmnCompositionSyncTimer !== null && editor.__stmnCompositionSyncTimer !== undefined) {
            clearTimeout(editor.__stmnCompositionSyncTimer);
        }
        editor.__stmnCompositionSyncTimer = null;
        stmnSettlingEditors.delete(editor);
        stmnHandleChecklistBeforeInput(event, note, editor);
    });
    editor.addEventListener('keyup', () => {
        stmnRememberEditorSelection(note.id, editor);
        stmnUpdateFormatControls(card, editor);
    });
    editor.addEventListener('pointerup', () => {
        stmnRememberEditorSelection(note.id, editor);
        stmnUpdateFormatControls(card, editor);
    });
    editor.addEventListener('keydown', event => {
        if (event.target.closest?.('.stmn-inline-image-caption')) return;
        if (event.isComposing || event.keyCode === 229 || stmnComposingEditors.has(editor)) return;
        const selectedImage = stmnSelectedImages.get(note.id);
        if (selectedImage && (event.key === 'Backspace' || event.key === 'Delete')) {
            event.preventDefault();
            stmnRemoveInlineImage(note, editor, selectedImage);
            return;
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
            const selection = globalThis.getSelection?.();
            const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
            const adjacent = stmnAdjacentInlineImage(range, event.key === 'Backspace' ? -1 : 1);
            if (adjacent) {
                event.preventDefault();
                stmnRemoveInlineImage(note, editor, adjacent);
                return;
            }
        }
    });
    editor.addEventListener('paste', event => {
        const image = [...(event.clipboardData?.files || [])].find(file => file.type.startsWith('image/'));
        event.preventDefault();
        stmnRememberEditorSelection(note.id, editor);
        if (image) stmnAddImage(note, image, stmnUsableRange(note.id, editor));
        else document.execCommand('insertText', false, event.clipboardData?.getData('text/plain') || '');
    });
    editor.addEventListener('click', event => {
        const remove = event.target.closest('[data-remove-image]');
        const image = event.target.closest('.stmn-inline-image');
        const checkbox = event.target.closest('.stmn-inline-checkbox');
        if (remove && image) {
            event.preventDefault();
            event.stopPropagation();
            stmnRemoveInlineImage(note, editor, image);
            return;
        }
        if (checkbox) {
            event.preventDefault();
            const line = checkbox.closest('[data-stmn-line="check"]');
            const done = line.dataset.checked !== 'true';
            line.dataset.checked = String(done);
            line.classList.toggle('is-done', done);
            checkbox.textContent = done ? '✓' : '';
            checkbox.setAttribute('aria-checked', String(done));
            stmnSyncEditor(note, editor, true);
            return;
        }
        if (image && !event.target.closest('.stmn-inline-image-caption')) {
            card.querySelectorAll('.stmn-inline-image.is-selected').forEach(item => item.classList.remove('is-selected'));
            image.classList.add('is-selected');
            stmnSelectedImages.set(note.id, image);
            if (event.target.closest('.stmn-inline-image-frame img')) {
                stmnShowLightbox({
                    dataUrl: image.querySelector('img')?.src || '',
                    name: image.dataset.name || '이미지',
                    caption: image.dataset.caption || '',
                });
            }
        }
    });

    card.querySelectorAll('[data-action], [data-highlight], [data-format-command], [data-format-size]').forEach(control => {
        control.addEventListener('pointerdown', event => {
            stmnRememberEditorSelection(note.id, editor);
            if (control.dataset.action === 'toggle-check' || control.dataset.highlight || control.dataset.formatCommand) event.preventDefault();
        });
    });

    card.addEventListener('click', event => {
        const action = event.target.closest('[data-action]')?.dataset.action;
        if (!action) return;
        if (action === 'move-up') stmnMoveNote(note.id, -1);
        if (action === 'move-down') stmnMoveNote(note.id, 1);
        if (action === 'collapse') {
            note.collapsed = !note.collapsed;
            note.updatedAt = Date.now();
            stmnScheduleSave(0);
            stmnRenderNotes();
        }
        if (action === 'delete') stmnDeleteNote(note.id);
        if (action === 'toggle-check') stmnToggleChecklist(note, editor);
        if (action === 'add-image') {
            stmnPendingImageRanges.set(note.id, stmnUsableRange(note.id, editor)?.cloneRange() || null);
            fileInput.click();
        }
        if (action === 'auto-height') {
            note.heightMode = 'auto';
            note.height = null;
            note.updatedAt = Date.now();
            stmnScheduleSave(0);
            stmnRenderNotes();
        }
    });

    card.querySelectorAll('[data-highlight]').forEach(button => {
        button.addEventListener('pointerdown', event => event.preventDefault());
        button.addEventListener('click', () => stmnApplyHighlight(note, editor, button.dataset.highlight));
    });

    card.querySelectorAll('[data-format-command]').forEach(button => {
        button.addEventListener('click', () => stmnApplyTextFormat(note, editor, button.dataset.formatCommand));
    });
    card.querySelector('[data-format-size]')?.addEventListener('change', event => {
        stmnApplyTextSize(note, editor, event.target.value);
    });

    fileInput.addEventListener('change', async () => {
        const file = fileInput.files?.[0];
        const point = stmnPendingImageRanges.get(note.id) || null;
        stmnPendingImageRanges.delete(note.id);
        fileInput.value = '';
        if (file) await stmnAddImage(note, file, point);
    });
    card.addEventListener('dragover', event => {
        if ([...event.dataTransfer.types].includes('Files')) {
            event.preventDefault();
            card.classList.add('is-dragging-image');
        }
    });
    card.addEventListener('dragleave', () => card.classList.remove('is-dragging-image'));
    card.addEventListener('drop', async event => {
        card.classList.remove('is-dragging-image');
        const file = [...(event.dataTransfer?.files || [])].find(item => item.type.startsWith('image/'));
        if (!file) return;
        event.preventDefault();
        const point = document.caretRangeFromPoint?.(event.clientX, event.clientY) || null;
        await stmnAddImage(note, file, point && editor.contains(point.commonAncestorContainer) ? point : stmnUsableRange(note.id, editor));
    });
    stmnBindCardResize(card, note);
    requestAnimationFrame(() => stmnUpdateOverflow(card));
}

function stmnColorChannels(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized || normalized === 'transparent') return null;
    const hex = normalized.match(/^#([\da-f]{3}|[\da-f]{6}|[\da-f]{8})$/i)?.[1];
    if (hex) {
        const full = hex.length === 3 ? [...hex].map(character => character + character).join('') : hex;
        if (full.length === 8 && Number.parseInt(full.slice(6, 8), 16) === 0) return null;
        return [0, 2, 4].map(index => Number.parseInt(full.slice(index, index + 2), 16));
    }
    const rgb = normalized.match(/^rgba?\(\s*([\d.]+)[, ]+\s*([\d.]+)[, ]+\s*([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/i);
    if (!rgb) return null;
    if (rgb[4] && (rgb[4] === '0' || rgb[4] === '0%' || Number.parseFloat(rgb[4]) === 0)) return null;
    return rgb.slice(1, 4).map(channel => Math.round(Number.parseFloat(channel)));
}

function stmnColorsMatch(first, second) {
    const a = Array.isArray(first) ? first : stmnColorChannels(first);
    const b = Array.isArray(second) ? second : stmnColorChannels(second);
    return Boolean(a && b && a.every((channel, index) => Math.abs(channel - b[index]) <= 1));
}

function stmnNodeHighlightColor(node, editor) {
    let element = node?.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    if (!(element instanceof HTMLElement)) return null;
    while (element && editor.contains(element)) {
        const color = globalThis.getComputedStyle?.(element)?.backgroundColor || element.style?.backgroundColor;
        const channels = stmnColorChannels(color);
        if (channels) return channels;
        if (element === editor) break;
        element = element.parentElement;
    }
    return null;
}

function stmnRangeHasHighlightColor(range, editor, color) {
    const target = stmnColorChannels(color);
    if (!range || !target) return false;
    if (range.collapsed) {
        try {
            const commandColor = document.queryCommandValue?.('hiliteColor') || document.queryCommandValue?.('backColor');
            if (stmnColorsMatch(commandColor, target)) return true;
        } catch {
            // 커서 주변 DOM 색상 확인으로 이어집니다.
        }
        let node = range.startContainer;
        if (node.nodeType === Node.ELEMENT_NODE) {
            node = node.childNodes[Math.max(0, range.startOffset - 1)] || node.childNodes[range.startOffset] || node;
        }
        return stmnColorsMatch(stmnNodeHighlightColor(node, editor), target);
    }
    const portions = stmnTextNodesInRange(range, editor).filter(node => {
        const start = node === range.startContainer ? range.startOffset : 0;
        const end = node === range.endContainer ? range.endOffset : node.nodeValue.length;
        return end > start;
    });
    return portions.length > 0 && portions.every(node => stmnColorsMatch(stmnNodeHighlightColor(node, editor), target));
}

function stmnApplyHighlight(note, editor, color) {
    const range = stmnRestoreEditorSelection(note.id, editor);
    const appliedColor = color !== 'transparent' && stmnRangeHasHighlightColor(range, editor, color) ? 'transparent' : color;
    try {
        document.execCommand('styleWithCSS', false, 'true');
        document.execCommand('hiliteColor', false, appliedColor);
        if (appliedColor === 'transparent') document.execCommand('backColor', false, 'transparent');
    } catch (error) {
        console.warn('[ChatSSi MeMo] Highlight command failed', error);
    }
    stmnSelectedRanges.delete(note.id);
    stmnSyncEditor(note, editor, true);
    stmnUpdateFormatControls(editor.closest('.stmn-card'), editor);
}

function stmnRestoreEditorSelection(noteId, editor) {
    const usable = stmnUsableRange(noteId, editor);
    const saved = usable?.cloneRange?.() || null;
    editor.focus({ preventScroll: true });
    const selection = globalThis.getSelection?.();
    if (selection && saved && editor.contains(saved.commonAncestorContainer)) {
        selection.removeAllRanges();
        selection.addRange(saved);
    } else if (!saved) {
        stmnSetCaret(editor, 'end');
    }
    const active = selection?.rangeCount ? selection.getRangeAt(0) : null;
    return active && editor.contains(active.commonAncestorContainer) ? active : null;
}

function stmnCommandState(command) {
    try {
        return Boolean(document.queryCommandState?.(command));
    } catch {
        return false;
    }
}

function stmnUpdateFormatControls(card, editor) {
    if (!card || !editor) return;
    const selection = globalThis.getSelection?.();
    const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
    if (!range || !editor.contains(range.commonAncestorContainer)) return;
    card.querySelectorAll('[data-format-command]').forEach(button => {
        const active = stmnCommandState(button.dataset.formatCommand);
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });
    const select = card.querySelector('[data-format-size]');
    if (select) select.value = '';
}

function stmnApplyTextFormat(note, editor, command) {
    stmnRestoreEditorSelection(note.id, editor);
    try {
        document.execCommand('styleWithCSS', false, 'true');
        document.execCommand(command, false, null);
    } catch (error) {
        console.warn('[ChatSSi MeMo] Text formatting command failed', error);
    }
    stmnRememberEditorSelection(note.id, editor);
    stmnSyncEditor(note, editor, true);
    stmnUpdateFormatControls(editor.closest('.stmn-card'), editor);
}

function stmnApplyTextSize(note, editor, sizeId) {
    const size = STMN_TEXT_SIZES.find(item => item.id === sizeId);
    const select = editor.closest('.stmn-card')?.querySelector('[data-format-size]');
    if (!size) {
        if (select) select.value = '';
        return;
    }
    const range = stmnRestoreEditorSelection(note.id, editor);
    if (!range) return;
    if (range.collapsed) stmnInsertTextSizeTypingMarker(range, editor, size.id);
    else stmnApplyTextSizeToRange(range, editor, size.id);
    stmnRememberEditorSelection(note.id, editor);
    stmnSyncEditor(note, editor, true);
    if (select) select.value = '';
    stmnUpdateFormatControls(editor.closest('.stmn-card'), editor);
}

function stmnBindCardResize(card, note) {
    const handle = card.querySelector('.stmn-card-resizer');
    handle.addEventListener('pointerdown', event => {
        event.preventDefault();
        event.stopPropagation();
        const startY = event.clientY;
        const startHeight = card.getBoundingClientRect().height;
        handle.setPointerCapture?.(event.pointerId);
        card.classList.add('is-resizing');
        note.heightMode = 'manual';

        const onMove = moveEvent => {
            const max = Math.max(240, stmnViewport().height - 30);
            const height = stmnClamp(startHeight + moveEvent.clientY - startY, 190, max);
            card.style.height = `${Math.round(height)}px`;
            card.classList.add('is-manual-height');
            note.height = Math.round(height);
            stmnUpdateOverflow(card);
        };
        const onUp = () => {
            handle.removeEventListener('pointermove', onMove);
            handle.removeEventListener('pointerup', onUp);
            handle.removeEventListener('pointercancel', onUp);
            card.classList.remove('is-resizing');
            note.updatedAt = Date.now();
            stmnScheduleSave(0);
            stmnUpdateOverflow(card);
        };
        handle.addEventListener('pointermove', onMove);
        handle.addEventListener('pointerup', onUp);
        handle.addEventListener('pointercancel', onUp);
    });
}

function stmnUpdateOverflow(card) {
    if (!card || !card.classList.contains('is-manual-height') || card.classList.contains('is-collapsed')) {
        card?.classList.remove('is-overflowing');
        return;
    }
    const main = card.querySelector('.stmn-card-main');
    card.classList.toggle('is-overflowing', main.scrollHeight > main.clientHeight + 3);
}

async function stmnAddImage(note, file, insertionPoint = null) {
    if (!file.type.startsWith('image/')) {
        globalThis.toastr?.warning?.('이미지 파일만 넣을 수 있습니다.');
        return;
    }
    const editor = stmnEditorFor(note.id);
    const stored = document.createElement('div');
    stored.innerHTML = stmnSanitizeEditorHtml(note.contentHtml);
    if ((editor || stored).querySelectorAll('[data-stmn-image]').length >= STMN_MAX_IMAGES) {
        globalThis.toastr?.warning?.(`메모 하나에는 이미지를 ${STMN_MAX_IMAGES}장까지 넣을 수 있습니다.`);
        return;
    }
    if (file.size > 15 * 1024 * 1024) {
        globalThis.toastr?.warning?.('15MB 이하 이미지를 사용해주세요.');
        return;
    }
    try {
        const dataUrl = await stmnCompressImage(file);
        const runtime = stmnStorageRuntime;
        if (!runtime || runtime.status !== 'ready' || runtime.readOnly) throw new Error('현재 메모는 이미지를 저장할 수 없는 상태입니다.');
        const storedImage = await stmnStoreImageFile(runtime, dataUrl, file.name);
        const holder = document.createElement('div');
        holder.innerHTML = stmnImageMarkup({ name: file.name, id: storedImage.id, src: stmnFileUrl(storedImage.fileName), caption: '' });
        const image = holder.firstElementChild;
        const target = stmnEditorFor(note.id);
        if (target) {
            let range = insertionPoint;
            if (!(range instanceof Range) || !target.contains(range.commonAncestorContainer)) {
                range = stmnUsableRange(note.id, target);
            }
            const rangeElement = range?.startContainer?.nodeType === Node.ELEMENT_NODE
                ? range.startContainer
                : range?.startContainer?.parentElement;
            const caption = rangeElement?.closest?.('.stmn-inline-image-caption');
            if (caption) {
                const enclosingImage = caption.closest('.stmn-inline-image');
                const adjusted = document.createRange();
                adjusted.setStartAfter(enclosingImage);
                adjusted.collapse(true);
                range = adjusted;
            }
            if (range && target.contains(range.commonAncestorContainer)) {
                range.deleteContents();
                range.insertNode(image);
            } else {
                let line = target.querySelector('[data-stmn-line]:last-child');
                if (!line) {
                    target.innerHTML = stmnTextLineMarkup();
                    line = target.lastElementChild;
                }
                stmnLineContent(line).append(image);
            }
            const selection = globalThis.getSelection?.();
            const caret = document.createRange();
            caret.setStartAfter(image);
            caret.collapse(true);
            selection?.removeAllRanges();
            selection?.addRange(caret);
            stmnRememberEditorSelection(note.id, target);
            stmnSyncEditor(note, target, true);
        } else {
            let line = stored.querySelector('[data-stmn-line]:last-child');
            if (!line) {
                stored.innerHTML = stmnTextLineMarkup();
                line = stored.lastElementChild;
            }
            stmnLineContent(line).append(image);
            note.contentHtml = stmnNormalizeEditorHtml(stored.innerHTML);
            note.updatedAt = Date.now();
            stmnScheduleSave(0);
            stmnRenderNotes();
        }
        await stmnSaveNow();
    } catch (error) {
        console.error('[ChatSSi MeMo] Image load failed', error);
        globalThis.toastr?.error?.('이미지를 저장하지 못했습니다.');
    }
}

function stmnCompressImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            const image = new Image();
            image.onerror = reject;
            image.onload = () => {
                const scale = Math.min(1, STMN_IMAGE_MAX_SIDE / Math.max(image.naturalWidth, image.naturalHeight));
                const width = Math.max(1, Math.round(image.naturalWidth * scale));
                const height = Math.max(1, Math.round(image.naturalHeight * scale));
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, width, height);
                let result = canvas.toDataURL('image/webp', 0.8);
                if (!result.startsWith('data:image/webp')) result = canvas.toDataURL('image/jpeg', 0.82);
                resolve(result);
            };
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}

function stmnShowLightbox(image) {
    const lightbox = document.querySelector('#stmn-lightbox');
    if (!lightbox || !image?.dataUrl) return;
    const preview = lightbox.querySelector('img');
    const caption = image.caption || image.name || '이미지';
    preview.src = image.dataUrl;
    preview.alt = caption;
    lightbox.querySelector('.stmn-lightbox-caption').textContent = caption;
    try {
        if (!lightbox.open) lightbox.showModal();
    } catch (error) {
        console.warn('[ChatSSi MeMo] Image dialog presentation failed; using open fallback.', error);
        lightbox.setAttribute('open', '');
    }
    lightbox.classList.add('is-open');
    lightbox.querySelector('.stmn-lightbox-close')?.focus?.({ preventScroll: true });
}

function stmnCloseLightbox() {
    const lightbox = document.querySelector('#stmn-lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    if (lightbox.open) lightbox.close();
    const preview = lightbox.querySelector('img');
    if (preview) {
        preview.removeAttribute('src');
        preview.alt = '';
    }
    const caption = lightbox.querySelector('.stmn-lightbox-caption');
    if (caption) caption.textContent = '';
}

function stmnRenderNotes({ flush = true } = {}) {
    const list = document.querySelector('#stmn-notes');
    const empty = document.querySelector('#stmn-empty');
    const count = document.querySelector('#stmn-result-count');
    const chatLabel = document.querySelector('#stmn-chat-label');
    if (!list || !empty || !count || !chatLabel) return;

    if (flush) stmnFlushVisibleEditors(stmnStorageRuntime, { schedule: true });
    chatLabel.textContent = stmnChatLabel();
    list.replaceChildren();
    if (stmnStorageRuntime?.status === 'ready') list.dataset.stmnOwnerId = stmnStorageRuntime.ownerId;
    else delete list.dataset.stmnOwnerId;
    empty.classList.remove('is-status');
    if (!stmnHasChat()) {
        stmnClearFindVisuals(true);
        stmnFindMatches = [];
        stmnFindIndex = -1;
        empty.hidden = false;
        empty.innerHTML = '<strong>열린 채팅이 없습니다.</strong><span>캐릭터나 그룹 채팅을 열면 전용 메모장이 만들어집니다.</span>';
        count.textContent = '';
        return;
    }

    const store = stmnStore();
    const runtime = stmnStorageRuntime;
    const addButton = document.querySelector('#stmn-add-note');
    if (addButton) addButton.disabled = !store || Boolean(runtime?.readOnly);
    if (!store) {
        stmnClearFindVisuals(true);
        stmnFindMatches = [];
        stmnFindIndex = -1;
        empty.hidden = false;
        count.textContent = '';
        if (runtime?.status === 'error') {
            empty.innerHTML = `<strong>공유 메모를 불러오지 못했습니다.</strong><span>${stmnEscapeHtml(runtime.error?.message || '기존 파일은 변경하지 않았습니다.')}</span><button id="stmn-storage-retry" type="button">다시 불러오기</button>`;
            empty.querySelector('#stmn-storage-retry')?.addEventListener('click', () => stmnLoadCurrentStorage());
        } else {
            empty.innerHTML = '<strong>공유 메모를 불러오는 중입니다.</strong><span>확인과 무결성 검사가 끝날 때까지 잠시 기다려주세요.</span>';
        }
        return;
    }
    const query = stmnSearch.trim().toLocaleLowerCase();
    const notes = query ? store.notes.filter(note => stmnSearchableText(note).includes(query)) : store.notes;
    count.textContent = query ? '0/0' : `${store.notes.length}`;
    empty.hidden = notes.length > 0;
    if (store.notes.length === 0) {
        empty.innerHTML = '<strong>아직 메모가 없습니다.</strong><span>＋ 새 메모를 눌러 첫 포스트잇을 만들어보세요.</span>';
    } else if (notes.length === 0) {
        empty.innerHTML = '<strong>검색 결과가 없습니다.</strong><span>다른 검색어를 입력해보세요.</span>';
    } else if (runtime?.readOnly) {
        empty.classList.add('is-status');
        empty.hidden = false;
        empty.innerHTML = '<strong>다른 기기 또는 탭에서 편집 중입니다.</strong><span>현재 창은 데이터 충돌을 막기 위해 읽기 전용입니다.</span><button id="stmn-take-lease" type="button">이 창에서 편집권 가져오기</button>';
        empty.querySelector('#stmn-take-lease')?.addEventListener('click', stmnTakeEditingLease);
    }
    notes.forEach(note => {
        const originalIndex = store.notes.findIndex(item => item.id === note.id);
        list.append(stmnCardTemplate(note, originalIndex, store.notes.length));
    });
    stmnRefreshFindMatches();
}

function stmnPanelMarkup() {
    const panel = document.createElement('dialog');
    panel.id = 'stmn-panel';
    panel.setAttribute('aria-label', 'ChatSSi MeMo');
    panel.innerHTML = `
        <div id="stmn-panel-resizer" class="stmn-panel-resizer stmn-panel-side-resizer" title="좌우로 드래그해 메모장 폭 조절" aria-hidden="true"></div>
        <div class="stmn-panel-resizer stmn-panel-corner-resizer stmn-resize-nw" data-resize-corner="nw" title="왼쪽 위에서 창 크기 조절" aria-hidden="true"></div>
        <div class="stmn-panel-resizer stmn-panel-corner-resizer stmn-resize-ne" data-resize-corner="ne" title="오른쪽 위에서 창 크기 조절" aria-hidden="true"></div>
        <div class="stmn-panel-resizer stmn-panel-corner-resizer stmn-resize-sw" data-resize-corner="sw" title="왼쪽 아래에서 창 크기 조절" aria-hidden="true"></div>
        <div class="stmn-panel-resizer stmn-panel-corner-resizer stmn-resize-se" data-resize-corner="se" title="오른쪽 아래에서 창 크기 조절" aria-hidden="true"></div>
        <header class="stmn-panel-head">
            <div class="stmn-brand">
                <strong>ChatSSi MeMo</strong>
                <span id="stmn-chat-label"></span>
            </div>
            <div class="stmn-panel-actions">
                <select id="stmn-theme-select" title="테마 선택" aria-label="테마 선택">
                    <option value="basic">기본</option>
                    <option value="windows-notepad">윈도우 메모장</option>
                    <option value="current">현재 테마</option>
                    <option value="custom">커스텀</option>
                </select>
                <span id="stmn-save-state" title="자동 저장">저장됨</span>
                <button id="stmn-add-note" type="button" title="새 메모">＋</button>
                <button id="stmn-close-panel" type="button" title="닫기">×</button>
            </div>
        </header>
        <div class="stmn-font-toolbar">
            <label for="stmn-font-select">전체 메모 글꼴</label>
            <select id="stmn-font-select" title="모든 메모에 적용할 글꼴" aria-label="모든 메모 글꼴"></select>
        </div>
        <div class="stmn-search-wrap">
            <span aria-hidden="true">⌕</span>
            <input id="stmn-search" type="search" placeholder="현재 캐릭터·그룹 메모 검색" autocomplete="off">
            <small id="stmn-result-count" aria-live="polite"></small>
            <button id="stmn-find-prev" type="button" title="이전 검색 결과" aria-label="이전 검색 결과" hidden>↑</button>
            <button id="stmn-find-next" type="button" title="다음 검색 결과" aria-label="다음 검색 결과" hidden>↓</button>
        </div>
        <div id="stmn-notes"></div>
        <div id="stmn-empty" class="stmn-empty"></div>
    `;
    document.body.append(panel);

    const floating = document.createElement('button');
    floating.id = 'stmn-floating-button';
    floating.type = 'button';
    floating.title = 'ChatSSi MeMo 열기';
    floating.setAttribute('aria-label', 'ChatSSi MeMo 열기');
    floating.setAttribute('aria-expanded', 'false');
    floating.innerHTML = '<span class="stmn-visually-hidden">ChatSSi MeMo</span>';
    document.body.append(floating);

    const lightbox = document.createElement('dialog');
    lightbox.id = 'stmn-lightbox';
    lightbox.setAttribute('aria-label', '첨부 이미지 원본 보기');
    lightbox.innerHTML = '<button type="button" class="stmn-lightbox-close" title="이미지 닫기" aria-label="이미지 닫기">×</button><img alt=""><div class="stmn-lightbox-caption"></div>';
    document.body.append(lightbox);

    panel.querySelector('#stmn-add-note').addEventListener('click', () => stmnCreateNote());
    panel.querySelector('#stmn-close-panel').addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        stmnClosePanel();
    });
    panel.querySelector('#stmn-theme-select').addEventListener('change', event => stmnSetTheme(event.target.value));
    panel.querySelector('#stmn-font-select').addEventListener('change', event => stmnSetFont(event.target.value));
    panel.querySelector('#stmn-search').addEventListener('input', event => {
        stmnSearch = event.target.value;
        stmnFindIndex = 0;
        stmnRenderNotes();
        if (stmnSearch.trim()) stmnActivateFindMatch(0, { scroll: true, select: false });
    });
    panel.querySelector('#stmn-search').addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            stmnMoveFind(event.shiftKey ? -1 : 1);
        }
        if (event.key === 'Escape' && stmnSearch) {
            event.preventDefault();
            event.stopPropagation();
            event.currentTarget.value = '';
            stmnSearch = '';
            stmnFindIndex = -1;
            stmnRenderNotes();
        }
    });
    panel.querySelector('#stmn-find-prev').addEventListener('click', () => stmnMoveFind(-1));
    panel.querySelector('#stmn-find-next').addEventListener('click', () => stmnMoveFind(1));
    panel.addEventListener('cancel', event => {
        event.preventDefault();
        stmnClosePanel();
    });
    floating.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        if (floating.dataset.dragged === 'true') {
            floating.dataset.dragged = 'false';
            return;
        }
        stmnOpenFromLauncher(event);
    });
    lightbox.addEventListener('click', event => {
        if (event.target === lightbox || event.target.closest('.stmn-lightbox-close')) stmnCloseLightbox();
    });
    lightbox.addEventListener('cancel', event => {
        event.preventDefault();
        stmnCloseLightbox();
    });
    lightbox.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        event.preventDefault();
        event.stopPropagation();
        stmnCloseLightbox();
    });

    stmnBindFloatingDrag(floating);
    stmnBindPanelResize(panel);
    stmnBindPanelDrag(panel);
    stmnPanelObserver?.disconnect();
    stmnPanelObserver = new MutationObserver(() => {
        if (stmnPanelOpen) {
            if (!panel.classList.contains('stmn-open')) panel.classList.add('stmn-open');
            if (panel.getAttribute('aria-hidden') !== 'false') panel.setAttribute('aria-hidden', 'false');
            stmnPresentPanel(panel);
            stmnForcePanelVisible(panel, true);
        }
    });
    stmnPanelObserver.observe(panel, { attributes: true, attributeFilter: ['class', 'aria-hidden', 'open'] });
    stmnApplyTheme();
    stmnApplyFont();
    stmnApplyLayout();
    stmnRenderNotes();
}

function stmnPresentPanel(panel) {
    // Keep the memo window modeless so SillyTavern's chat input remains
    // focusable and clickable while the memo is open on mobile and tablet.
    const desiredMode = 'modeless';
    if (panel.open && panel.dataset.dialogMode === desiredMode) return;
    if (panel.open) panel.close();
    try {
        panel.show();
    } catch (error) {
        console.warn('[ChatSSi MeMo] Native dialog presentation failed; using open fallback.', error);
        panel.setAttribute('open', '');
    }
    panel.dataset.dialogMode = desiredMode;
}

function stmnForcePanelVisible(panel, visible) {
    const critical = ['display', 'visibility', 'opacity', 'pointer-events', 'transform', 'z-index', 'position'];
    if (!visible) {
        critical.forEach(property => panel.style.removeProperty(property));
        return;
    }
    panel.style.setProperty('display', 'flex', 'important');
    panel.style.setProperty('visibility', 'visible', 'important');
    panel.style.setProperty('opacity', '1', 'important');
    panel.style.setProperty('pointer-events', 'auto', 'important');
    panel.style.setProperty('transform', 'none', 'important');
    panel.style.setProperty('z-index', '2147483000', 'important');
    panel.style.setProperty('position', 'fixed', 'important');
}

function stmnOpenPanel() {
    const panel = document.querySelector('#stmn-panel');
    if (!panel) return;
    stmnPanelOpen = true;
    panel.classList.add('stmn-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('stmn-panel-open');
    document.querySelector('#stmn-floating-button')?.setAttribute('aria-expanded', 'true');
    stmnApplyLayout();
    if (stmnKeyboardLikelyOpen()) stmnApplyKeyboardViewport(panel);
    stmnPresentPanel(panel);
    stmnForcePanelVisible(panel, true);
    stmnRenderNotes();
}

function stmnClosePanel() {
    const panel = document.querySelector('#stmn-panel');
    if (!panel) return;
    const runtime = stmnStorageRuntime;
    stmnFlushVisibleEditors(runtime, { schedule: false });
    stmnPanelOpen = false;
    panel.classList.remove('stmn-open');
    panel.setAttribute('aria-hidden', 'true');
    if (panel.open) panel.close();
    delete panel.dataset.dialogMode;
    stmnForcePanelVisible(panel, false);
    stmnClearKeyboardViewport(panel);
    document.body.classList.remove('stmn-panel-open');
    stmnApplyTabletLandscapeSplit(panel);
    document.querySelector('#stmn-floating-button')?.setAttribute('aria-expanded', 'false');
    if (runtime?.dirty && !runtime.readOnly) void stmnSaveNow(runtime);
}

function stmnOpenFromLauncher(event = null) {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    stmnOpenPanel();
}

function stmnApplyLayout() {
    const panel = document.querySelector('#stmn-panel');
    const floating = document.querySelector('#stmn-floating-button');
    if (!panel || !floating) return;
    const settings = stmnSettings();
    const mode = stmnMode();
    const { width, height } = stmnViewport();
    document.body?.style.setProperty('--stmn-layout-width', `${width}px`);
    document.body?.style.setProperty('--stmn-layout-height', `${height}px`);
    panel.dataset.mode = mode;
    panel.classList.toggle('stmn-side-panel', stmnIsSideMode(mode));
    panel.classList.toggle('stmn-bottom-sheet', !stmnIsSideMode(mode));
    let renderedPanelWidth = null;

    if (stmnIsSideMode(mode)) {
        const key = mode === 'desktop' ? 'desktopPanelWidth' : 'tabletLandscapePanelWidth';
        const bounds = stmnSidePanelBounds(mode, width);
        renderedPanelWidth = Math.round(stmnClamp(settings[key], bounds.minimum, bounds.maximum));
        panel.style.setProperty('top', '0', 'important');
        panel.style.setProperty('right', 'auto', 'important');
        panel.style.setProperty('bottom', '0', 'important');
        panel.style.setProperty('left', '0', 'important');
        panel.style.setProperty('width', `${renderedPanelWidth}px`, 'important');
        panel.style.setProperty('height', `${height}px`, 'important');
    } else {
        const heightKey = stmnMobileHeightKey(mode);
        const topKey = stmnMobileTopKey(mode);
        const widthKey = stmnMobileWidthKey(mode);
        const leftKey = stmnMobileLeftKey(mode);
        const minimumWidth = Math.min(280, width);
        const minimumHeight = Math.min(210, height);
        const panelWidth = Math.round(stmnClamp(settings[widthKey] * width, minimumWidth, width));
        const panelHeight = Math.round(stmnClamp(settings[heightKey] * height, minimumHeight, height));
        const defaultTop = 0;
        const defaultLeft = 0;
        const requestedTop = settings[topKey] === null
            ? defaultTop
            : Math.round(stmnClamp(settings[topKey], 0, 1) * height);
        const requestedLeft = settings[leftKey] === null
            ? defaultLeft
            : Math.round(stmnClamp(settings[leftKey], 0, 1) * width);
        const panelTop = stmnClamp(requestedTop, 0, Math.max(0, height - panelHeight));
        const panelLeft = stmnClamp(requestedLeft, 0, Math.max(0, width - panelWidth));
        panel.style.setProperty('top', `${Math.round(panelTop)}px`, 'important');
        panel.style.setProperty('right', 'auto', 'important');
        panel.style.setProperty('bottom', 'auto', 'important');
        panel.style.setProperty('left', `${Math.round(panelLeft)}px`, 'important');
        panel.style.setProperty('width', `${panelWidth}px`, 'important');
        panel.style.setProperty('height', `${panelHeight}px`, 'important');
    }
    floating.hidden = !settings.showFloatingButton;
    stmnPlaceFloating(floating);
    stmnApplyTheme();
    if (stmnPanelOpen) {
        stmnPresentPanel(panel);
        stmnForcePanelVisible(panel, true);
    }
    stmnApplyTabletLandscapeSplit(panel, mode, renderedPanelWidth);
    if (stmnKeyboardOpen) stmnApplyKeyboardViewport(panel);
    document.querySelectorAll('.stmn-card').forEach(stmnUpdateOverflow);
}

function stmnBindPanelResize(panel) {
    const handles = panel.querySelectorAll('.stmn-panel-resizer');
    handles.forEach(handle => handle.addEventListener('pointerdown', event => {
        if (event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        const mode = stmnMode();
        const side = stmnIsSideMode(mode);
        const corner = handle.dataset.resizeCorner || 'e';
        if ((side && handle.dataset.resizeCorner) || (!side && !handle.dataset.resizeCorner)) return;
        const rect = panel.getBoundingClientRect();
        const startX = event.clientX;
        const startY = event.clientY;
        const startWidth = rect.width;
        const startHeight = rect.height;
        const startRight = rect.right;
        const startBottom = rect.bottom;
        handle.setPointerCapture?.(event.pointerId);
        panel.classList.add('is-panel-resizing');
        const onMove = moveEvent => {
            moveEvent.preventDefault();
            moveEvent.stopPropagation();
            const viewport = stmnViewport();
            if (side) {
                const bounds = stmnSidePanelBounds(mode, viewport.width);
                const size = stmnClamp(startWidth + moveEvent.clientX - startX, bounds.minimum, bounds.maximum);
                panel.style.setProperty('width', `${Math.round(size)}px`, 'important');
                stmnApplyTabletLandscapeSplit(panel, mode, size);
            } else {
                const minimumWidth = Math.min(280, viewport.width);
                const minimumHeight = Math.min(210, viewport.height);
                const fromLeft = corner.includes('w');
                const fromTop = corner.includes('n');
                const width = fromLeft
                    ? stmnClamp(startWidth - (moveEvent.clientX - startX), minimumWidth, startRight)
                    : stmnClamp(startWidth + moveEvent.clientX - startX, minimumWidth, viewport.width - rect.left);
                const height = fromTop
                    ? stmnClamp(startHeight - (moveEvent.clientY - startY), minimumHeight, startBottom)
                    : stmnClamp(startHeight + moveEvent.clientY - startY, minimumHeight, viewport.height - rect.top);
                const left = fromLeft ? startRight - width : rect.left;
                const top = fromTop ? startBottom - height : rect.top;
                panel.style.setProperty('left', `${Math.round(left)}px`, 'important');
                panel.style.setProperty('right', 'auto', 'important');
                panel.style.setProperty('top', `${Math.round(top)}px`, 'important');
                panel.style.setProperty('bottom', 'auto', 'important');
                panel.style.setProperty('width', `${Math.round(width)}px`, 'important');
                panel.style.setProperty('height', `${Math.round(height)}px`, 'important');
            }
        };
        const onUp = () => {
            handle.removeEventListener('pointermove', onMove);
            handle.removeEventListener('pointerup', onUp);
            handle.removeEventListener('pointercancel', onUp);
            panel.classList.remove('is-panel-resizing');
            const settings = stmnSettings();
            const viewport = stmnViewport();
            if (side) {
                const key = mode === 'desktop' ? 'desktopPanelWidth' : 'tabletLandscapePanelWidth';
                settings[key] = Math.round(panel.getBoundingClientRect().width);
                stmnApplyTabletLandscapeSplit(panel, mode, settings[key]);
            } else {
                const resized = panel.getBoundingClientRect();
                settings[stmnMobileWidthKey(mode)] = stmnClamp(resized.width / viewport.width, 0, 1);
                settings[stmnMobileHeightKey(mode)] = stmnClamp(resized.height / viewport.height, 0, 1);
                settings[stmnMobileLeftKey(mode)] = stmnClamp(resized.left / viewport.width, 0, 1);
                settings[stmnMobileTopKey(mode)] = stmnClamp(resized.top / viewport.height, 0, 1);
            }
            stmnSaveSettings();
        };
        handle.addEventListener('pointermove', onMove);
        handle.addEventListener('pointerup', onUp);
        handle.addEventListener('pointercancel', onUp);
    }));
}

function stmnBindPanelDrag(panel) {
    const header = panel.querySelector('.stmn-panel-head');
    header.addEventListener('pointerdown', event => {
        if (stmnIsSideMode() || event.button !== 0) return;
        if (event.target.closest('button, select, input, a, [data-no-drag]')) return;
        event.preventDefault();
        event.stopPropagation();
        const mode = stmnMode();
        const startX = event.clientX;
        const startY = event.clientY;
        const rect = panel.getBoundingClientRect();
        let moved = false;
        header.setPointerCapture?.(event.pointerId);
        panel.classList.add('is-panel-moving');

        const onMove = moveEvent => {
            if (Math.max(Math.abs(moveEvent.clientX - startX), Math.abs(moveEvent.clientY - startY)) > 4) moved = true;
            if (!moved) return;
            moveEvent.preventDefault();
            moveEvent.stopPropagation();
            const viewport = stmnViewport();
            const left = stmnClamp(rect.left + moveEvent.clientX - startX, 0, Math.max(0, viewport.width - rect.width));
            const top = stmnClamp(rect.top + moveEvent.clientY - startY, 0, Math.max(0, viewport.height - rect.height));
            panel.style.setProperty('left', `${Math.round(left)}px`, 'important');
            panel.style.setProperty('right', 'auto', 'important');
            panel.style.setProperty('top', `${Math.round(top)}px`, 'important');
            panel.style.setProperty('bottom', 'auto', 'important');
        };

        const onUp = () => {
            header.removeEventListener('pointermove', onMove);
            header.removeEventListener('pointerup', onUp);
            header.removeEventListener('pointercancel', onUp);
            panel.classList.remove('is-panel-moving');
            if (!moved) return;
            const viewport = stmnViewport();
            const settings = stmnSettings();
            const movedRect = panel.getBoundingClientRect();
            settings[stmnMobileLeftKey(mode)] = stmnClamp(movedRect.left / viewport.width, 0, 1);
            settings[stmnMobileTopKey(mode)] = stmnClamp(movedRect.top / viewport.height, 0, 1);
            stmnSaveSettings();
        };

        header.addEventListener('pointermove', onMove);
        header.addEventListener('pointerup', onUp);
        header.addEventListener('pointercancel', onUp);
    });
}

function stmnPlaceFloating(button) {
    const settings = stmnSettings();
    const viewport = stmnViewport();
    const size = 38;
    const maxX = Math.max(8, viewport.width - size - 8);
    const maxY = Math.max(8, viewport.height - size - 8);
    const defaultX = maxX - 10;
    const defaultY = maxY - 84;
    const x = settings.floatingXRatio === null ? defaultX : stmnClamp(settings.floatingXRatio * maxX, 8, maxX);
    const y = settings.floatingYRatio === null ? defaultY : stmnClamp(settings.floatingYRatio * maxY, 8, maxY);
    button.style.left = `${Math.round(x)}px`;
    button.style.top = `${Math.round(y)}px`;
}

function stmnBindFloatingDrag(button) {
    button.addEventListener('pointerdown', event => {
        event.stopPropagation();
        const startX = event.clientX;
        const startY = event.clientY;
        const rect = button.getBoundingClientRect();
        let moved = false;
        button.setPointerCapture?.(event.pointerId);
        const onMove = moveEvent => {
            if (Math.abs(moveEvent.clientX - startX) + Math.abs(moveEvent.clientY - startY) > 5) moved = true;
            if (!moved) return;
            moveEvent.preventDefault();
            moveEvent.stopPropagation();
            const viewport = stmnViewport();
            const x = stmnClamp(rect.left + moveEvent.clientX - startX, 8, viewport.width - rect.width - 8);
            const y = stmnClamp(rect.top + moveEvent.clientY - startY, 8, viewport.height - rect.height - 8);
            button.style.left = `${Math.round(x)}px`;
            button.style.top = `${Math.round(y)}px`;
        };
        const onUp = () => {
            button.removeEventListener('pointermove', onMove);
            button.removeEventListener('pointerup', onUp);
            button.removeEventListener('pointercancel', onUp);
            if (!moved) return;
            button.dataset.dragged = 'true';
            const viewport = stmnViewport();
            const end = button.getBoundingClientRect();
            const maxX = Math.max(1, viewport.width - end.width - 8);
            const maxY = Math.max(1, viewport.height - end.height - 8);
            const settings = stmnSettings();
            settings.floatingXRatio = stmnClamp(end.left / maxX, 0, 1);
            settings.floatingYRatio = stmnClamp(end.top / maxY, 0, 1);
            stmnSaveSettings();
        };
        button.addEventListener('pointermove', onMove);
        button.addEventListener('pointerup', onUp);
        button.addEventListener('pointercancel', onUp);
    });
}

function stmnTimestamp(date = new Date()) {
    const pad = value => String(value).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}_${String(date.getMilliseconds()).padStart(3, '0')}`;
}

function stmnSafeFileLabel(value) {
    const label = String(value || 'memo').normalize('NFKC').replace(/[\\/:*?"<>|\x00-\x1f]/g, '-').replace(/\s+/g, '-').slice(0, 80);
    return label || 'memo';
}

async function stmnSealBackup(payload) {
    const sealed = structuredClone(payload);
    delete sealed.checksum;
    sealed.checksum = await stmnSha256(JSON.stringify(sealed));
    return sealed;
}

async function stmnValidateBackup(payload) {
    if (!payload || payload.app !== 'ChatSSi MeMo' || payload.schema !== STMN_BACKUP_SCHEMA || !['backup', 'conflict-copy'].includes(payload.type)) {
        throw new Error('챗시 노트 백업 형식이 아닙니다.');
    }
    const clone = structuredClone(payload);
    const checksum = clone.checksum;
    delete clone.checksum;
    if (!checksum || await stmnSha256(JSON.stringify(clone)) !== checksum) {
        throw new Error('백업 파일의 무결성 검증에 실패했습니다.');
    }
    if (payload.type === 'backup' && (!Array.isArray(payload.owners) || payload.owners.some(owner => !owner?.ownerId || !owner?.payload?.store || !Array.isArray(owner.payload.store.notes) || !owner.images || typeof owner.images !== 'object'))) {
        throw new Error('백업 파일의 소유자 데이터 구조가 손상되었습니다.');
    }
    return payload;
}

async function stmnBackupOwnerRecord(ownerId, index) {
    const fileName = stmnOwnerFileName(ownerId);
    const payload = await stmnReadJsonFile(fileName);
    if (!payload) throw new Error(`${index.owners?.[ownerId]?.label || ownerId} 메모 파일이 없습니다.`);
    await stmnValidatePayload(payload, 'owner', ownerId);
    const images = {};
    for (const [imageId, image] of Object.entries(payload.images || {})) {
        const bytes = await stmnReadFileBytes(image.fileName);
        if (!bytes || await stmnSha256(bytes) !== image.sha256) {
            throw new Error(`${image.name || image.fileName} 이미지 검증에 실패했습니다.`);
        }
        images[imageId] = { ...image, dataBase64: stmnBytesToBase64(bytes) };
    }
    for (const note of payload.store.notes) {
        const holder = document.createElement('div');
        holder.innerHTML = stmnSanitizeEditorHtml(note.contentHtml);
        for (const wrapper of holder.querySelectorAll('[data-stmn-image]')) {
            const imageId = wrapper.dataset.stmnImageId;
            if (!imageId || !images[imageId]) throw new Error('메모 본문이 참조하는 이미지가 저장소에 없습니다.');
            if ((wrapper.querySelector('img')?.getAttribute('src') || '').startsWith('data:image/')) {
                throw new Error('분리되지 않은 인라인 이미지가 남아 있어 백업을 중단했습니다.');
            }
        }
    }
    const ownerPayload = structuredClone(payload);
    ownerPayload.lease = null;
    const portablePayload = await stmnSealPayload(ownerPayload);
    return {
        ownerId,
        ownerInfo: structuredClone(index.owners?.[ownerId] || payload.scope || {}),
        payload: portablePayload,
        images,
    };
}

async function stmnBuildBackup(allOwners = false) {
    stmnFlushVisibleEditors(stmnStorageRuntime, { schedule: false });
    if (stmnStorageRuntime?.status === 'ready' && stmnStorageRuntime.dirty) {
        await stmnSaveNow(stmnStorageRuntime);
        if (stmnStorageRuntime.dirty) throw new Error('아직 저장되지 않은 변경이 있어 백업을 중단했습니다. 먼저 저장 상태를 확인해주세요.');
    }
    const index = await stmnReadIndex();
    const ownerIds = allOwners
        ? Object.keys(index.owners || {})
        : stmnStorageRuntime?.ownerId ? [stmnStorageRuntime.ownerId] : [];
    if (!ownerIds.length) throw new Error('백업할 메모가 없습니다.');
    const owners = [];
    for (const ownerId of ownerIds) owners.push(await stmnBackupOwnerRecord(ownerId, index));
    const aliasSubset = {};
    for (const [alias, ownerId] of Object.entries(index.aliases || {})) {
        if (ownerIds.includes(ownerId)) aliasSubset[alias] = ownerId;
    }
    return stmnSealBackup({
        app: 'ChatSSi MeMo',
        schema: STMN_BACKUP_SCHEMA,
        type: 'backup',
        appVersion: '2.0.2',
        createdAt: new Date().toISOString(),
        scope: allOwners ? 'all' : 'current',
        index: {
            revision: index.revision,
            aliases: aliasSubset,
            owners: Object.fromEntries(ownerIds.map(ownerId => [ownerId, structuredClone(index.owners[ownerId] || {})])),
        },
        owners,
    });
}

async function stmnRunBackup({ allOwners = false, internal = false } = {}) {
    if (stmnBackupBusy) return;
    stmnBackupBusy = true;
    try {
        const backup = await stmnBuildBackup(allOwners);
        const text = JSON.stringify(backup, null, 2);
        await stmnValidateBackup(JSON.parse(text));
        const label = allOwners ? 'ALL' : stmnSafeFileLabel(stmnStorageRuntime?.scope?.label);
        const fileName = `ChatSSi-MeMo_${label}_${stmnTimestamp()}.backup.json`;
        if (internal) {
            const internalName = `chatssi_memo_backup_${allOwners ? 'all' : 'current'}_${stmnTimestamp()}.json`;
            await stmnUploadBase64(internalName, stmnUtf8ToBase64(text));
            const verified = await stmnReadJsonFile(internalName);
            await stmnValidateBackup(verified);
            globalThis.toastr?.success?.('실리태번 사용자 파일 폴더에 수동 스냅샷을 저장했습니다.');
        } else {
            stmnDownloadBlob(fileName, new Blob([text], { type: 'application/json' }));
            globalThis.toastr?.success?.('검증된 수동 백업을 만들었습니다.');
        }
    } catch (error) {
        console.error('[ChatSSi MeMo] Backup failed', error);
        globalThis.toastr?.error?.(error.message || '백업을 만들지 못했습니다.');
    } finally {
        stmnBackupBusy = false;
    }
}

function stmnRewriteRestoredImageRefs(store, imageMap) {
    const restored = stmnNormalizeStoreObject(structuredClone(store));
    for (const note of restored.notes) {
        const holder = document.createElement('div');
        holder.innerHTML = stmnSanitizeEditorHtml(note.contentHtml);
        for (const wrapper of holder.querySelectorAll('[data-stmn-image]')) {
            const mapped = imageMap.get(wrapper.dataset.stmnImageId);
            if (!mapped) throw new Error('백업 본문이 참조하는 이미지 데이터가 없습니다.');
            wrapper.dataset.stmnImageId = mapped.id;
            wrapper.querySelector('img')?.setAttribute('src', stmnFileUrl(mapped.fileName));
        }
        note.contentHtml = stmnNormalizeEditorHtml(holder.innerHTML);
    }
    return restored;
}

async function stmnRestoreOwnerRecord(record, targetRuntime, mode) {
    const imageMap = new Map();
    for (const [oldId, image] of Object.entries(record.images || {})) {
        const bytes = stmnBase64ToBytes(image.dataBase64);
        if (await stmnSha256(bytes) !== image.sha256) throw new Error(`${image.name || oldId} 이미지 체크섬이 일치하지 않습니다.`);
        const id = targetRuntime.ownerId === record.ownerId ? oldId : (crypto.randomUUID?.() || stmnId('image').replace(/^image-/, ''));
        const fileName = `${STMN_IMAGE_FILE_PREFIX}${targetRuntime.ownerId}_${id}.${stmnImageExtension(image.mimeType)}`;
        await stmnUploadBase64(fileName, stmnBytesToBase64(bytes));
        const verifiedBytes = await stmnReadFileBytes(fileName);
        if (!verifiedBytes || await stmnSha256(verifiedBytes) !== image.sha256) throw new Error('복원 이미지 검증에 실패했습니다.');
        const restoredImage = { ...image, id, fileName };
        delete restoredImage.dataBase64;
        targetRuntime.payload.images[id] = restoredImage;
        imageMap.set(oldId, restoredImage);
    }
    const restoredStore = stmnRewriteRestoredImageRefs(record.payload.store, imageMap);
    const nextStore = mode === 'replace'
        ? restoredStore
        : stmnMergeStores(targetRuntime.payload.store, restoredStore, 'backup-restore').store;
    await stmnWriteOwner(targetRuntime, nextStore);
}

async function stmnImportBackup(file, mode = 'merge') {
    if (stmnBackupBusy) return;
    stmnBackupBusy = true;
    try {
        const backup = await stmnValidateBackup(JSON.parse(await file.text()));
        if (backup.type !== 'backup' || !Array.isArray(backup.owners) || !backup.owners.length) throw new Error('복원할 메모가 없는 백업입니다.');
        const noteCount = backup.owners.reduce((sum, owner) => sum + (owner.payload?.store?.notes?.length || 0), 0);
        const imageCount = backup.owners.reduce((sum, owner) => sum + Object.keys(owner.images || {}).length, 0);
        const summary = `${backup.createdAt || '날짜 미상'} 백업\n소유자 ${backup.owners.length}개 · 메모 ${noteCount}개 · 이미지 ${imageCount}개`;
        if (!globalThis.confirm(`${summary}\n\n${mode === 'replace' ? '현재 메모를 교체' : '현재 메모와 안전하게 병합'}할까요?`)) return;
        if (mode === 'replace' && !globalThis.confirm('교체 모드는 현재 메모 구성을 백업 내용으로 바꿉니다. 계속할까요?')) return;

        const safety = await stmnBuildBackup(backup.scope === 'all');
        const safetyName = `chatssi_memo_backup_pre_restore_${stmnTimestamp()}.json`;
        await stmnUploadBase64(safetyName, stmnUtf8ToBase64(JSON.stringify(safety, null, 2)));
        await stmnValidateBackup(await stmnReadJsonFile(safetyName));

        if (backup.scope === 'current' || backup.owners.length === 1) {
            if (!stmnStorageRuntime || stmnStorageRuntime.status !== 'ready') throw new Error('복원 대상 캐릭터나 그룹 채팅을 먼저 열어주세요.');
            await stmnRestoreOwnerRecord(backup.owners[0], stmnStorageRuntime, mode);
        } else {
            let index = await stmnReadIndex();
            for (const record of backup.owners) {
                let payload = await stmnReadJsonFile(stmnOwnerFileName(record.ownerId));
                if (!payload) {
                    payload = await stmnVerifiedWriteJson(
                        stmnOwnerFileName(record.ownerId),
                        stmnOwnerPreviousFileName(record.ownerId),
                        stmnEmptyOwner(record.ownerId, record.payload.scope || { kind: 'character', label: record.ownerInfo?.label || '복원 메모' }),
                        value => stmnValidatePayload(value, 'owner', record.ownerId),
                    );
                } else await stmnValidatePayload(payload, 'owner', record.ownerId);
                const runtime = {
                    status: 'ready',
                    scope: record.payload.scope || record.ownerInfo || {},
                    ownerId: record.ownerId,
                    fileName: stmnOwnerFileName(record.ownerId),
                    payload,
                    readOnly: stmnLeaseIsForeign(payload),
                };
                await stmnRestoreOwnerRecord(record, runtime, mode);
                index.owners[record.ownerId] ??= structuredClone(record.ownerInfo || { ownerId: record.ownerId, kind: runtime.scope.kind, label: runtime.scope.label, aliases: [] });
            }
            for (const [alias, ownerId] of Object.entries(backup.index?.aliases || {})) {
                if (!index.aliases[alias]) index.aliases[alias] = ownerId;
            }
            index = await stmnWriteIndex(index);
        }
        await stmnLoadCurrentStorage();
        globalThis.toastr?.success?.('백업을 검증하고 복원했습니다. 복원 전 안전 스냅샷도 보존했습니다.');
    } catch (error) {
        console.error('[ChatSSi MeMo] Restore failed', error);
        globalThis.toastr?.error?.(error.message || '백업을 복원하지 못했습니다.');
    } finally {
        stmnBackupBusy = false;
    }
}

function stmnAddSettingsPanel() {
    const host = document.querySelector('#extensions_settings2');
    if (!host || document.querySelector('#stmn-settings')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'stmn-settings';
    wrapper.className = 'extension_container';
    wrapper.innerHTML = `
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>챗시 노트</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content">
                <p>같은 캐릭터의 채팅과 브랜치가 하나의 메모를 공유합니다. 메모는 AI 프롬프트에 주입되지 않습니다.</p>
                <label class="checkbox_label"><input id="stmn-setting-floating" type="checkbox"><span>플로팅 메모 버튼 표시</span></label>
                <label class="stmn-setting-row">
                    <span>앱 테마</span>
                    <select id="stmn-setting-theme">
                        <option value="basic">기본 테마</option>
                        <option value="windows-notepad">윈도우 메모장 테마</option>
                        <option value="current">현재 실리태번 테마</option>
                        <option value="custom">사용자 커스텀 테마</option>
                    </select>
                </label>
                <div class="stmn-custom-theme-editor">
                    <strong>커스텀 테마 만들기</strong>
                    <label><span>테마 이름</span><input type="text" maxlength="60" data-stmn-theme-key="name"></label>
                    <div class="stmn-theme-color-grid">
                        <label><span>패널 배경</span><input type="color" data-stmn-theme-key="panelBg"></label>
                        <label><span>패널 글자</span><input type="color" data-stmn-theme-key="panelText"></label>
                        <label><span>패널 테두리</span><input type="color" data-stmn-theme-key="panelBorder"></label>
                        <label><span>메모 배경</span><input type="color" data-stmn-theme-key="cardBg"></label>
                        <label><span>메모 글자</span><input type="color" data-stmn-theme-key="cardText"></label>
                        <label><span>메모 테두리</span><input type="color" data-stmn-theme-key="cardBorder"></label>
                        <label><span>강조색</span><input type="color" data-stmn-theme-key="accent"></label>
                        <label><span>버튼 배경</span><input type="color" data-stmn-theme-key="buttonBg"></label>
                        <label><span>편집 배경</span><input type="color" data-stmn-theme-key="editorBg"></label>
                    </div>
                    <label><span>둥근 모서리</span><input type="range" min="0" max="24" step="1" data-stmn-theme-key="cornerRadius"></label>
                    <div class="stmn-theme-file-buttons">
                        <button id="stmn-theme-export" class="menu_button" type="button">테마 내보내기</button>
                        <button id="stmn-theme-import-button" class="menu_button" type="button">테마 가져오기</button>
                        <input id="stmn-theme-import" type="file" accept="application/json,.json" hidden>
                    </div>
                </div>
                <div class="stmn-font-manager">
                    <strong>사용자 폰트 관리</strong>
                    <p>폰트 이름과 웹폰트 주소를 입력해 추가할 수 있습니다. CSS 주소를 쓸 때는 CSS에 선언된 font-family 이름을 그대로 입력해주세요.</p>
                    <label><span>웹폰트 이름</span><input id="stmn-new-font-name" type="text" maxlength="80" placeholder="예: My Font"></label>
                    <label><span>웹폰트 주소</span><input id="stmn-new-font-url" type="url" maxlength="2048" placeholder="https://example.com/font.woff2"></label>
                    <button id="stmn-add-user-font" class="menu_button" type="button">사용자 폰트 추가</button>
                    <div id="stmn-user-font-list"></div>
                </div>
                <div class="stmn-backup-manager">
                    <strong>메모 데이터 백업·복원</strong>
                    <p>다운로드 백업은 기기 밖에도 보관할 수 있습니다. 내부 스냅샷은 실리태번의 <code>user/files</code>에 날짜별로 저장됩니다.</p>
                    <div class="stmn-backup-grid">
                        <button id="stmn-backup-current" class="menu_button" type="button">현재 캐릭터 백업</button>
                        <button id="stmn-backup-all" class="menu_button" type="button">전체 메모 백업</button>
                        <button id="stmn-snapshot-current" class="menu_button" type="button">현재 내부 스냅샷</button>
                        <button id="stmn-snapshot-all" class="menu_button" type="button">전체 내부 스냅샷</button>
                    </div>
                    <label class="stmn-setting-row">
                        <span>복원 방식</span>
                        <select id="stmn-restore-mode">
                            <option value="merge">안전 병합(권장)</option>
                            <option value="replace">현재 내용 교체</option>
                        </select>
                    </label>
                    <button id="stmn-restore-button" class="menu_button" type="button">백업 파일 가져오기</button>
                    <input id="stmn-restore-input" type="file" accept="application/json,.json" hidden>
                </div>
                <div class="stmn-settings-buttons">
                    <button id="stmn-setting-open" class="menu_button" type="button">메모장 열기</button>
                    <button id="stmn-setting-new" class="menu_button" type="button">새 메모</button>
                </div>
            </div>
        </div>
    `;
    host.append(wrapper);
    const checkbox = wrapper.querySelector('#stmn-setting-floating');
    checkbox.checked = stmnSettings().showFloatingButton;
    checkbox.addEventListener('change', () => {
        stmnSettings().showFloatingButton = checkbox.checked;
        stmnSaveSettings();
        stmnApplyLayout();
    });
    const themeSelect = wrapper.querySelector('#stmn-setting-theme');
    themeSelect.value = stmnSettings().themeId;
    themeSelect.addEventListener('change', () => stmnSetTheme(themeSelect.value));
    wrapper.querySelectorAll('[data-stmn-theme-key]').forEach(input => {
        const update = () => {
            const settings = stmnSettings();
            const key = input.dataset.stmnThemeKey;
            const value = key === 'cornerRadius' ? Number(input.value) : input.value;
            settings.customTheme = stmnValidateCustomTheme({ ...settings.customTheme, [key]: value });
            settings.themeId = 'custom';
            stmnSaveSettings();
            stmnApplyTheme();
        };
        input.addEventListener(input.type === 'text' ? 'change' : 'input', update);
    });
    stmnSyncCustomThemeInputs();
    wrapper.querySelector('#stmn-theme-export').addEventListener('click', stmnExportTheme);
    const importInput = wrapper.querySelector('#stmn-theme-import');
    wrapper.querySelector('#stmn-theme-import-button').addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', async () => {
        const file = importInput.files?.[0];
        importInput.value = '';
        if (file) await stmnImportTheme(file);
    });
    wrapper.querySelector('#stmn-add-user-font').addEventListener('click', stmnAddUserFont);
    stmnRenderCustomFontManager();
    wrapper.querySelector('#stmn-backup-current').addEventListener('click', () => stmnRunBackup({ allOwners: false, internal: false }));
    wrapper.querySelector('#stmn-backup-all').addEventListener('click', () => stmnRunBackup({ allOwners: true, internal: false }));
    wrapper.querySelector('#stmn-snapshot-current').addEventListener('click', () => stmnRunBackup({ allOwners: false, internal: true }));
    wrapper.querySelector('#stmn-snapshot-all').addEventListener('click', () => stmnRunBackup({ allOwners: true, internal: true }));
    const restoreInput = wrapper.querySelector('#stmn-restore-input');
    wrapper.querySelector('#stmn-restore-button').addEventListener('click', () => restoreInput.click());
    restoreInput.addEventListener('change', async () => {
        const file = restoreInput.files?.[0];
        restoreInput.value = '';
        if (file) await stmnImportBackup(file, wrapper.querySelector('#stmn-restore-mode').value);
    });
    wrapper.querySelector('#stmn-setting-open').addEventListener('click', stmnOpenPanel);
    wrapper.querySelector('#stmn-setting-new').addEventListener('click', () => {
        stmnOpenPanel();
        stmnCreateNote();
    });
}

function stmnAddWandButton() {
    if (document.querySelector('#stmn-wand-button')) return;
    const host = document.querySelector('#st_private_notes_wand_container') || document.querySelector('#extensionsMenu');
    if (!host) return;
    const button = document.createElement('div');
    button.id = 'stmn-wand-button';
    button.className = 'list-group-item flex-container flexGap5 interactable';
    button.tabIndex = 0;
    button.title = '챗시 노트 열기';
    button.innerHTML = '<i class="fa-solid fa-note-sticky"></i><span>챗시 노트</span>';
    button.addEventListener('click', stmnOpenFromLauncher);
    button.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') stmnOpenFromLauncher(event);
    });
    host.append(button);
}

function stmnSlashCallback(_namedArgs, unnamedArgs) {
    const raw = String(unnamedArgs ?? '').trim();
    const [command = '', ...rest] = raw.split(/\s+/);
    const text = rest.join(' ').trim();
    if (!command || command === '열기' || command.toLowerCase() === 'open') {
        stmnOpenPanel();
        return '';
    }
    if (command === '닫기' || command.toLowerCase() === 'close') {
        stmnClosePanel();
        return '';
    }
    if (command === '새' || command === '추가' || command.toLowerCase() === 'new') {
        stmnOpenPanel();
        stmnCreateNote({ title: text });
        return '';
    }
    if (command === '체크' || command.toLowerCase() === 'check') {
        stmnOpenPanel();
        const store = stmnStore();
        let note = store?.notes.find(item => item.id === store.selectedId) || store?.notes.at(-1);
        if (!note) note = stmnCreateNote();
        if (note) stmnAppendChecklist(note, text);
        return '';
    }
    if (command === '검색' || command.toLowerCase() === 'search') {
        stmnOpenPanel();
        stmnSearch = text;
        stmnFindIndex = 0;
        const input = document.querySelector('#stmn-search');
        if (input) input.value = text;
        stmnRenderNotes();
        if (text) stmnActivateFindMatch(0, { scroll: true, select: false });
        return '';
    }
    stmnOpenPanel();
    stmnCreateNote({ html: command + (text ? ` ${text}` : '') });
    return '';
}

function stmnRegisterSlashCommand() {
    try {
        const context = stmnContext();
        const parser = context?.SlashCommandParser || globalThis.SlashCommandParser;
        const commandClass = context?.SlashCommand || globalThis.SlashCommand;
        if (parser?.addCommandObject && commandClass?.fromProps) {
            parser.addCommandObject(commandClass.fromProps({
                name: 'memo',
                aliases: ['rp-memo', 'note'],
                callback: stmnSlashCallback,
                returns: '빈 문자열(채팅으로 전송하지 않음)',
                helpString: `
                    <div>AI에게 보내지 않는 현재 캐릭터·그룹 공유 메모장을 조작합니다.</div>
                    <ul>
                        <li><code>/memo</code> — 메모장 열기</li>
                        <li><code>/memo 새 제목</code> — 새 메모</li>
                        <li><code>/memo 체크 내용</code> — 체크 항목 추가</li>
                        <li><code>/memo 검색 단어</code> — 메모 검색</li>
                        <li><code>/memo 닫기</code> — 메모장 닫기</li>
                    </ul>
                `,
            }));
            return;
        }
        if (typeof context?.registerSlashCommand === 'function') {
            context.registerSlashCommand('memo', stmnSlashCallback, [], 'ChatSSi MeMo 열기/추가', true, true);
        }
    } catch (error) {
        console.warn('[ChatSSi MeMo] Slash command registration failed', error);
    }
}

function stmnBindAppEvents() {
    const context = stmnContext();
    if (!context?.eventSource || !context?.event_types) return;
    context.eventSource.on(context.event_types.CHAT_CHANGED, () => { void stmnLoadCurrentStorage(); });
    if (context.event_types.CHARACTER_RENAMED) {
        context.eventSource.on(context.event_types.CHARACTER_RENAMED, (...args) => { void stmnHandleCharacterRenamed(...args); });
    }
}

function stmnScheduleStableLayout() {
    if (stmnViewportTimer) clearTimeout(stmnViewportTimer);
    stmnViewportTimer = setTimeout(() => {
        stmnViewportTimer = null;
        if (stmnKeyboardLikelyOpen() || (stmnKeyboardOpen && stmnVisibleViewportReduced())) {
            stmnApplyKeyboardViewport();
            return;
        }
        stmnClearKeyboardViewport();
        stmnCommitStableViewport();
        stmnApplyLayout();
    }, STMN_VIEWPORT_SETTLE_MS);
}

function stmnOnWindowResize() {
    if (stmnKeyboardLikelyOpen() || (stmnKeyboardOpen && stmnVisibleViewportReduced())) {
        if (stmnViewportTimer) clearTimeout(stmnViewportTimer);
        stmnViewportTimer = null;
        stmnApplyKeyboardViewport();
        return;
    }
    stmnScheduleStableLayout();
}

function stmnOnVisualViewportChange() {
    if (stmnKeyboardLikelyOpen() || (stmnKeyboardOpen && stmnVisibleViewportReduced())) {
        if (stmnViewportTimer) clearTimeout(stmnViewportTimer);
        stmnViewportTimer = null;
        stmnApplyKeyboardViewport();
        return;
    }
    stmnScheduleStableLayout();
}

function stmnOnOrientationChange() {
    stmnClearKeyboardViewport();
    stmnScheduleStableLayout();
}

async function stmnInit() {
    if (stmnInitialized) return;
    if (!stmnContext()) {
        setTimeout(stmnInit, 250);
        return;
    }
    const staleUi = document.querySelectorAll('#stmn-panel, #stmn-floating-button, #stmn-lightbox, #stmn-settings, #stmn-wand-button');
    if (staleUi.length) {
        staleUi.forEach(element => element.remove());
        document.body.classList.remove('stmn-panel-open');
        console.warn('[ChatSSi MeMo] A stale or duplicate UI instance was replaced.');
    }
    document.body.classList.remove('stmn-tablet-landscape-split');
    document.body.classList.remove('stmn-keyboard-open');
    document.body.style.removeProperty('--stmn-tablet-panel-width');
    stmnCommitStableViewport();
    stmnInitialized = true;
    stmnSettings();
    stmnPanelMarkup();
    void stmnLoadCurrentStorage();
    stmnAddSettingsPanel();
    stmnAddWandButton();
    stmnRegisterSlashCommand();
    stmnBindAppEvents();
    globalThis.addEventListener('resize', stmnOnWindowResize);
    globalThis.visualViewport?.addEventListener('resize', stmnOnVisualViewportChange);
    globalThis.addEventListener('orientationchange', stmnOnOrientationChange);
    globalThis.addEventListener('beforeunload', () => {
        stmnFlushVisibleEditors(stmnStorageRuntime, { schedule: false });
        if (stmnStorageRuntime?.dirty) void stmnSaveNow(stmnStorageRuntime);
    });
    setTimeout(stmnAddWandButton, 1200);
    setTimeout(stmnAddSettingsPanel, 1200);
    console.info('[ChatSSi MeMo] v2.0.2 loaded');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stmnInit, { once: true });
} else {
    stmnInit();
}
