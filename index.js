const STMN_MODULE = 'st_private_notes';
const STMN_CHAT_KEY = 'st_private_notes_v1';
const STMN_VERSION = 4;

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
const STMN_MAX_IMAGES = 6;
const STMN_IMAGE_MAX_SIDE = 1280;

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
let stmnPanelObserver = null;
let stmnActiveFontResource = null;
const stmnNormalizedStores = new WeakSet();

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

function stmnViewport() {
    return {
        width: Math.round(globalThis.visualViewport?.width || globalThis.innerWidth || 1024),
        height: Math.round(globalThis.visualViewport?.height || globalThis.innerHeight || 768),
    };
}

function stmnMode() {
    const { width, height } = stmnViewport();
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
    const dataUrl = typeof image?.dataUrl === 'string' && image.dataUrl.startsWith('data:image/') ? stmnEscapeAttr(image.dataUrl) : '';
    if (!dataUrl) return '';
    return `<span class="stmn-inline-image" data-stmn-image="true" data-name="${name}" data-caption="${caption}" contenteditable="false" tabindex="0"><span class="stmn-inline-image-frame"><img src="${dataUrl}" alt="${caption || name}" draggable="false"><button type="button" class="stmn-inline-image-remove" data-remove-image="true" title="이미지 삭제" aria-label="이미지 삭제">×</button></span><span class="stmn-inline-image-caption" contenteditable="true" role="textbox" data-placeholder="이미지 설명">${caption}</span></span>`;
}

function stmnTextLineMarkup(html = '') {
    return `<div class="stmn-editor-line" data-stmn-line="text">${html || '<br>'}</div>`;
}

function stmnCheckLineMarkup(text = '', done = false) {
    return `<div class="stmn-editor-line stmn-check-line${done ? ' is-done' : ''}" data-stmn-line="check" data-checked="${done ? 'true' : 'false'}"><span class="stmn-inline-checkbox" contenteditable="false" role="checkbox" aria-checked="${done ? 'true' : 'false'}" tabindex="-1">${done ? '✓' : ''}</span><span class="stmn-check-content">${text || '<br>'}</span></div>`;
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
    };
    if (normalized.heightMode === 'manual' && !normalized.height) normalized.height = 260;
    return normalized;
}

function stmnStore(create = true) {
    const context = stmnContext();
    if (!context || !stmnHasChat()) return null;
    const metadata = context.chatMetadata;
    if (!metadata || typeof metadata !== 'object') return null;
    if (!metadata[STMN_CHAT_KEY]) {
        if (!create) return null;
        metadata[STMN_CHAT_KEY] = { version: STMN_VERSION, notes: [], selectedId: null };
    }
    const store = metadata[STMN_CHAT_KEY];
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

function stmnCurrentMetadata() {
    return stmnContext()?.chatMetadata ?? null;
}

async function stmnSaveNow() {
    if (stmnSaveTimer) {
        clearTimeout(stmnSaveTimer);
        stmnSaveTimer = null;
    }
    const context = stmnContext();
    if (!context || !stmnHasChat()) return;
    try {
        await context.saveMetadata();
        document.querySelector('#stmn-save-state')?.classList.remove('is-saving');
    } catch (error) {
        console.error('[ChatSSi MeMo] Failed to save chat metadata', error);
        globalThis.toastr?.error?.('메모 저장에 실패했습니다.');
    }
}

function stmnScheduleSave(delay = 450) {
    const metadataAtSchedule = stmnCurrentMetadata();
    document.querySelector('#stmn-save-state')?.classList.add('is-saving');
    if (stmnSaveTimer) clearTimeout(stmnSaveTimer);
    stmnSaveTimer = setTimeout(async () => {
        stmnSaveTimer = null;
        if (metadataAtSchedule !== stmnCurrentMetadata()) return;
        await stmnSaveNow();
    }, delay);
}

function stmnSanitize(html) {
    const purifier = globalThis.SillyTavern?.libs?.DOMPurify;
    if (!purifier) return String(html ?? '').replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    return purifier.sanitize(String(html ?? ''), {
        ALLOWED_TAGS: ['div', 'p', 'br', 'b', 'strong', 'i', 'em', 'u', 's', 'span', 'mark'],
        ALLOWED_ATTR: ['style'],
    });
}

function stmnSanitizeEditorHtml(html) {
    const purifier = globalThis.SillyTavern?.libs?.DOMPurify;
    if (!purifier) return String(html ?? '').replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    return purifier.sanitize(String(html ?? ''), {
        ALLOWED_TAGS: ['div', 'p', 'br', 'b', 'strong', 'i', 'em', 'u', 's', 'span', 'mark', 'img', 'button'],
        ALLOWED_ATTR: ['style', 'class', 'data-stmn-line', 'data-checked', 'data-stmn-image', 'data-name', 'data-caption', 'data-remove-image', 'data-placeholder', 'contenteditable', 'tabindex', 'role', 'aria-checked', 'aria-label', 'title', 'src', 'alt', 'draggable', 'type'],
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
    const card = document.createElement('article');
    card.className = `stmn-card${note.collapsed ? ' is-collapsed' : ''}`;
    card.dataset.stmnNoteId = note.id;
    if (note.heightMode === 'manual' && !note.collapsed) {
        card.classList.add('is-manual-height');
        card.style.height = `${note.height}px`;
    }
    card.innerHTML = `
        <div class="stmn-card-head">
            <input class="stmn-title-input" type="text" maxlength="120" aria-label="메모 제목">
            <div class="stmn-card-actions">
                <button type="button" class="stmn-icon-button" data-action="move-up" title="위로" ${index === 0 ? 'disabled' : ''}>▲</button>
                <button type="button" class="stmn-icon-button" data-action="move-down" title="아래로" ${index === total - 1 ? 'disabled' : ''}>▼</button>
                <button type="button" class="stmn-icon-button" data-action="collapse" title="접기/펼치기">${note.collapsed ? '＋' : '－'}</button>
                <button type="button" class="stmn-icon-button is-danger" data-action="delete" title="삭제">×</button>
            </div>
        </div>
        <div class="stmn-card-tools">
            <button type="button" class="stmn-tool-button" data-action="toggle-check">☑ 체크</button>
            <button type="button" class="stmn-tool-button" data-action="add-image">▧ 이미지</button>
            <button type="button" class="stmn-tool-button" data-action="auto-height" title="내용에 맞게 카드 높이 자동 조절">↕ 자동</button>
        </div>
        <div class="stmn-highlight-row" aria-label="형광펜">
            <span>형광펜</span>
            ${STMN_HIGHLIGHTS.map(color => `<button type="button" class="stmn-highlight" data-highlight="${color}" style="--stmn-highlight:${color}" title="선택한 글자 강조"></button>`).join('')}
            <button type="button" class="stmn-highlight-clear" data-highlight="transparent" title="형광펜 지우기">지우기</button>
        </div>
        <div class="stmn-card-main"><div class="stmn-unified-editor" contenteditable="true" role="textbox" aria-multiline="true" data-placeholder="메모 내용을 입력하세요"></div></div>
        <div class="stmn-overflow-mark" aria-hidden="true">…</div>
        <div class="stmn-card-resizer" title="위아래로 드래그해 메모 높이 조절"></div>
        <input class="stmn-image-input" type="file" accept="image/*" hidden>
    `;
    card.querySelector('.stmn-title-input').value = note.title;
    card.querySelector('.stmn-unified-editor').innerHTML = stmnNormalizeEditorHtml(note.contentHtml);
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
            element.replaceChildren();
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
}

function stmnUsableRange(noteId, editor, allowSelection = true) {
    const selection = globalThis.getSelection?.();
    const live = selection?.rangeCount ? selection.getRangeAt(0) : null;
    if (live && editor.contains(live.commonAncestorContainer) && (allowSelection || live.collapsed)) return live;
    const saved = stmnEditorRanges.get(noteId);
    return saved && editor.contains(saved.commonAncestorContainer) ? saved : null;
}

function stmnRepairLiveEditor(editor) {
    if (!editor) return;
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
        node.classList.add('stmn-editor-line');
        if (node.dataset.stmnLine === 'check') {
            node.classList.add('stmn-check-line');
            let marker = node.querySelector(':scope > .stmn-inline-checkbox');
            let content = node.querySelector(':scope > .stmn-check-content');
            if (!content) {
                content = document.createElement('span');
                content.className = 'stmn-check-content';
                const movable = [...node.childNodes].filter(child => child !== marker);
                content.append(...movable);
                node.append(content);
            }
            if (!marker) {
                marker = document.createElement('span');
                marker.className = 'stmn-inline-checkbox';
                marker.contentEditable = 'false';
                marker.setAttribute('role', 'checkbox');
                marker.tabIndex = -1;
                node.prepend(marker);
            }
            const escapedContent = [...node.childNodes].filter(child => child !== marker && child !== content);
            if (escapedContent.length) content.append(...escapedContent);
            const done = node.dataset.checked === 'true';
            marker.textContent = done ? '✓' : '';
            marker.setAttribute('aria-checked', String(done));
            node.classList.toggle('is-done', done);
            if (!content.childNodes.length) content.append(document.createElement('br'));
        }
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
    clean.querySelectorAll('.stmn-has-find-match, .stmn-is-find-current').forEach(element => {
        element.classList.remove('stmn-has-find-match', 'stmn-is-find-current');
    });
    return normalize ? stmnNormalizeEditorHtml(clean.innerHTML) : stmnSanitizeEditorHtml(clean.innerHTML);
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
    const oldContent = stmnLineContent(line);
    const fragment = document.createDocumentFragment();
    fragment.append(...oldContent.childNodes);
    line.replaceChildren();
    line.className = 'stmn-editor-line';
    line.dataset.stmnLine = type;
    delete line.dataset.checked;
    if (type === 'check') {
        line.classList.add('stmn-check-line');
        line.dataset.checked = 'false';
        const marker = document.createElement('span');
        marker.className = 'stmn-inline-checkbox';
        marker.contentEditable = 'false';
        marker.setAttribute('role', 'checkbox');
        marker.setAttribute('aria-checked', 'false');
        marker.tabIndex = -1;
        const content = document.createElement('span');
        content.className = 'stmn-check-content';
        content.append(fragment);
        if (!content.childNodes.length) content.append(document.createElement('br'));
        line.append(marker, content);
        stmnSetCaretAtTextOffset(content, caretOffset);
        return content;
    }
    line.append(fragment);
    if (!line.childNodes.length) line.append(document.createElement('br'));
    stmnSetCaretAtTextOffset(line, caretOffset);
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
    stmnConvertLine(line, line.dataset.stmnLine === 'check' ? 'text' : 'check', offset);
    if (text !== null) {
        const target = stmnLineContent(line);
        target.textContent = text;
        stmnSetCaret(target, 'end');
    }
    stmnRememberEditorSelection(note.id, editor);
    stmnSyncEditor(note, editor, true);
}

function stmnAppendChecklist(note, text = '') {
    const editor = stmnEditorFor(note.id);
    if (!editor) {
        note.contentHtml = `${note.contentHtml}${stmnCheckLineMarkup(stmnEscapeHtml(text))}`;
        note.updatedAt = Date.now();
        stmnScheduleSave(0);
        stmnRenderNotes();
        return;
    }
    const holder = document.createElement('div');
    holder.innerHTML = stmnCheckLineMarkup(stmnEscapeHtml(text));
    const line = holder.firstElementChild;
    editor.append(line);
    const content = stmnLineContent(line);
    stmnSetCaretAtTextOffset(content, (content.textContent || '').length);
    stmnSyncEditor(note, editor, true);
}

function stmnHandleChecklistKey(event, note, editor) {
    const selection = globalThis.getSelection?.();
    if (!selection?.rangeCount || !selection.isCollapsed) return false;
    const range = selection.getRangeAt(0);
    const line = stmnLineFromNode(range.startContainer, editor);
    if (!line || line.dataset.stmnLine !== 'check') return false;
    const content = stmnLineContent(line);
    const offset = stmnCaretOffsetIn(content, range);
    if (event.key === 'Backspace' && offset === 0) {
        event.preventDefault();
        stmnConvertLine(line, 'text', 0);
        stmnSyncEditor(note, editor, true);
        return true;
    }
    if (event.key !== 'Enter' || event.shiftKey) return false;
    event.preventDefault();
    const value = (content.textContent || '').replace(/\u200B/g, '');
    if (!value.trim() && !content.querySelector('[data-stmn-image]')) {
        stmnConvertLine(line, 'text', 0);
        stmnSyncEditor(note, editor, true);
        return true;
    }
    const holder = document.createElement('div');
    holder.innerHTML = stmnCheckLineMarkup();
    const next = holder.firstElementChild;
    const nextContent = stmnLineContent(next);
    if (content.contains(range.startContainer)) {
        const beforeRange = document.createRange();
        beforeRange.selectNodeContents(content);
        beforeRange.setEnd(range.startContainer, range.startOffset);
        const afterRange = document.createRange();
        afterRange.selectNodeContents(content);
        afterRange.setStart(range.startContainer, range.startOffset);
        const beforeFragment = beforeRange.cloneContents();
        const afterFragment = afterRange.cloneContents();
        content.replaceChildren(beforeFragment);
        nextContent.replaceChildren(afterFragment);
    } else {
        content.textContent = value.slice(0, offset);
        nextContent.textContent = value.slice(offset);
    }
    if (!content.childNodes.length) content.append(document.createElement('br'));
    if (!nextContent.childNodes.length) nextContent.append(document.createElement('br'));
    line.after(next);
    stmnSetCaretAtTextOffset(nextContent, 0);
    stmnRememberEditorSelection(note.id, editor);
    stmnSyncEditor(note, editor, true);
    return true;
}

function stmnRemoveInlineImage(note, editor, image) {
    if (!image) return;
    const line = image.closest('[data-stmn-line]');
    image.remove();
    if (line && !line.textContent && !line.querySelector('[data-stmn-image]')) line.innerHTML = '<br>';
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
    card.querySelector('.stmn-title-input').addEventListener('blur', stmnSaveNow);

    editor.addEventListener('focus', () => card.classList.add('is-editing'));
    editor.addEventListener('blur', async () => {
        card.classList.remove('is-editing');
        note.contentHtml = stmnEditorHtmlForStorage(editor, true);
        await stmnSaveNow();
        stmnUpdateOverflow(card);
    });
    editor.addEventListener('input', event => {
        const activeCaption = event.target.closest?.('.stmn-inline-image-caption');
        const activeImage = activeCaption?.closest?.('.stmn-inline-image');
        if (activeCaption && activeImage) {
            activeImage.dataset.caption = (activeCaption.textContent || '').slice(0, 200);
            const image = activeImage.querySelector('img');
            if (image) image.alt = activeImage.dataset.caption || activeImage.dataset.name || '이미지';
        }
        stmnRepairLiveEditor(editor);
        stmnRememberEditorSelection(note.id, editor);
        stmnSyncEditor(note, editor);
        stmnUpdateOverflow(card);
    });
    editor.addEventListener('keyup', () => stmnRememberEditorSelection(note.id, editor));
    editor.addEventListener('pointerup', () => stmnRememberEditorSelection(note.id, editor));
    editor.addEventListener('keydown', event => {
        if (event.target.closest?.('.stmn-inline-image-caption')) return;
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
        stmnHandleChecklistKey(event, note, editor);
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

    card.querySelectorAll('.stmn-card-tools [data-action], [data-highlight]').forEach(button => {
        button.addEventListener('pointerdown', event => {
            stmnRememberEditorSelection(note.id, editor);
            if (button.dataset.action === 'toggle-check' || button.dataset.highlight) event.preventDefault();
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

function stmnApplyHighlight(note, editor, color) {
    const selection = globalThis.getSelection?.();
    const saved = stmnSelectedRanges.get(note.id);
    if (saved && editor.contains(saved.commonAncestorContainer)) {
        selection.removeAllRanges();
        selection.addRange(saved);
    }
    editor.focus();
    try {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('hiliteColor', false, color);
        if (color === 'transparent') document.execCommand('backColor', false, 'transparent');
    } catch (error) {
        console.warn('[ChatSSi MeMo] Highlight command failed', error);
    }
    stmnSelectedRanges.delete(note.id);
    stmnSyncEditor(note, editor, true);
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
        const holder = document.createElement('div');
        holder.innerHTML = stmnImageMarkup({ name: file.name, dataUrl, caption: '' });
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

function stmnRenderNotes() {
    const list = document.querySelector('#stmn-notes');
    const empty = document.querySelector('#stmn-empty');
    const count = document.querySelector('#stmn-result-count');
    const chatLabel = document.querySelector('#stmn-chat-label');
    if (!list || !empty || !count || !chatLabel) return;

    chatLabel.textContent = stmnChatLabel();
    list.replaceChildren();
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
    const query = stmnSearch.trim().toLocaleLowerCase();
    const notes = query ? store.notes.filter(note => stmnSearchableText(note).includes(query)) : store.notes;
    count.textContent = query ? '0/0' : `${store.notes.length}`;
    empty.hidden = notes.length > 0;
    if (store.notes.length === 0) {
        empty.innerHTML = '<strong>아직 메모가 없습니다.</strong><span>＋ 새 메모를 눌러 첫 포스트잇을 만들어보세요.</span>';
    } else if (notes.length === 0) {
        empty.innerHTML = '<strong>검색 결과가 없습니다.</strong><span>다른 검색어를 입력해보세요.</span>';
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
            <input id="stmn-search" type="search" placeholder="현재 채팅의 메모 검색" autocomplete="off">
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
            stmnPresentPanel(panel, stmnIsSideMode());
            stmnForcePanelVisible(panel, true);
        }
    });
    stmnPanelObserver.observe(panel, { attributes: true, attributeFilter: ['class', 'aria-hidden', 'open'] });
    stmnApplyTheme();
    stmnApplyFont();
    stmnApplyLayout();
    stmnRenderNotes();
}

function stmnPresentPanel(panel, sideMode) {
    const desiredMode = sideMode ? 'modeless' : 'modal';
    if (panel.open && panel.dataset.dialogMode === desiredMode) return;
    if (panel.open) panel.close();
    try {
        if (sideMode) panel.show();
        else panel.showModal();
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
    stmnPresentPanel(panel, stmnIsSideMode());
    stmnForcePanelVisible(panel, true);
    stmnRenderNotes();
}

function stmnClosePanel() {
    const panel = document.querySelector('#stmn-panel');
    if (!panel) return;
    stmnPanelOpen = false;
    panel.classList.remove('stmn-open');
    panel.setAttribute('aria-hidden', 'true');
    if (panel.open) panel.close();
    delete panel.dataset.dialogMode;
    stmnForcePanelVisible(panel, false);
    document.body.classList.remove('stmn-panel-open');
    stmnApplyTabletLandscapeSplit(panel);
    document.querySelector('#stmn-floating-button')?.setAttribute('aria-expanded', 'false');
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
        panel.style.setProperty('height', '100dvh', 'important');
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
        stmnPresentPanel(panel, stmnIsSideMode(mode));
        stmnForcePanelVisible(panel, true);
    }
    stmnApplyTabletLandscapeSplit(panel, mode, renderedPanelWidth);
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
                <p>현재 채팅에만 연결되며 AI 프롬프트에는 주입되지 않습니다.</p>
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
                    <div>AI에게 보내지 않는 현재 채팅 전용 메모장을 조작합니다.</div>
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
    context.eventSource.on(context.event_types.CHAT_CHANGED, () => {
        if (stmnSaveTimer) clearTimeout(stmnSaveTimer);
        if (stmnFindRefreshTimer) clearTimeout(stmnFindRefreshTimer);
        stmnSaveTimer = null;
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
        stmnRenderNotes();
    });
}

function stmnOnViewportChange() {
    stmnApplyLayout();
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
    document.body.style.removeProperty('--stmn-tablet-panel-width');
    stmnInitialized = true;
    stmnSettings();
    stmnPanelMarkup();
    stmnAddSettingsPanel();
    stmnAddWandButton();
    stmnRegisterSlashCommand();
    stmnBindAppEvents();
    globalThis.addEventListener('resize', stmnOnViewportChange);
    globalThis.visualViewport?.addEventListener('resize', stmnOnViewportChange);
    globalThis.addEventListener('beforeunload', () => {
        if (stmnSaveTimer) stmnSaveNow();
    });
    setTimeout(stmnAddWandButton, 1200);
    setTimeout(stmnAddSettingsPanel, 1200);
    console.info('[ChatSSi MeMo] v1.1.0 loaded');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stmnInit, { once: true });
} else {
    stmnInit();
}
