export default (syntax) => ({
  name: "Pan",
  type: "light",
  colors: {
    //  // ---------------------------
    // Editor Base Colors
    // ---------------------------
    "selection.background": "#169fb155",
    descriptionForeground: "#929ea0",
    errorForeground: "#ff2d19",
    "widget.shadow": "#00000055",
    "editor.background": "#fff7ec",
    "editorLineNumber.foreground": "#ffaa76",
    "editorLineNumber.activeForeground": "#552C41",
    "editorCursor.foreground": "#674c26",
    // ---------------------------
    // Badge
    // ---------------------------
    "badge.background": "#735A3C",
    "badge.foreground": "#fff7ec",
    // ---------------------------
    // Activity Bar
    // ---------------------------
    "activityBar.background": "#ffaa76",
    "activityBar.dropBackground": "#ffc99865",
    "activityBar.foreground": "#735A3C",
    "activityBar.border": "#ff976700",
    "activityBarBadge.background": "#735A3C",
    "activityBarBadge.foreground": "#fff7ec",
    "activityBar.activeBackground": "#735A3C33",
    "activityBar.activeBorder": "#735A3C",
    // ---------------------------
    // Sidebar
    // ---------------------------
    "sideBar.background": "#ffe4bc",
    "sideBar.foreground": "#7b623e",
    "sideBar.border": "#ff976700",
    "sideBar.dropBackground": "#ffc99865",
    "sideBarTitle.foreground": "#7b623e",
    "sideBarTitle.background": "#ffaa76",
    "sideBarSectionHeader.background": "#ffaa7665",
    "sideBarSectionHeader.foreground": "#7b623e",
    // ---------------------------
    // Status Bar
    // ---------------------------
    "statusBar.background": "#ffaa76",
    "statusBar.foreground": "#735A3C",
    "statusBar.border": "#ff976700",
    "statusBar.debuggingBackground": "#ffe4bc",
    "statusBar.debuggingForeground": "#735A3C50",
    "statusBar.debuggingBorder": "#735A3Caf",
    "statusBar.noFolderForeground": "#5d9936",
    "statusBar.noFolderBackground": "#ffe4bc",
    "statusBar.noFolderBorder": "#ffe4bc",
    "statusBarItem.activeBackground": "#ffdd95",
    "statusBarItem.hoverBackground": "#ffcb9c",
    "statusBarItem.prominentBackground": "#ffdd95",
    "statusBarItem.prominentHoverBackground": "#ffcb9c",
    // ---------------------------
    // Button
    // ---------------------------
    "button.background": "#ffaa76",
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#ff9767",
    // ---------------------------
    // Dropdown
    // ---------------------------
    "dropdown.background": "#fff7ec",
    "dropdown.border": "#fff7ec",
    "dropdown.foreground": "#664a23",
    // ---------------------------
    // Editor Marker Navigation
    // ---------------------------
    "editorMarkerNavigation.background": "#735A3C29",
    "editorMarkerNavigationError.background": "#ff2d19",
    "editorMarkerNavigationWarning.background": "#e69533",
    // ---------------------------
    // Errors and warnings
    // ---------------------------
    "editorError.border": "#fff7ec",
    "editorError.foreground": "#ff2d19",
    "editorWarning.border": "#fff7ec",
    "editorWarning.foreground": "#e69533",
    "editorInfo.border": "#fff7ec",
    "editorInfo.foreground": "#bfa35e",
    "editorHint.border": "#58cc6d00",
    "editorHint.foreground": "#58cc6d",
    // ---------------------------
    // Editor Groups and Tabs
    // ---------------------------
    "editorGroup.emptyBackground": "#b8ae9333",
    "editorGroup.border": "#f0e7d1",
    "editorGroup.dropBackground": "#ffc99865",
    // ---------------------------
    // Editor Group Header
    // ---------------------------
    "editorGroupHeader.noTabsBackground": "#ffe4bc",
    "editorGroupHeader.tabsBackground": "#ffe4bc",
    "editorGroupHeader.tabsBorder": "#ffe4bc00",
    // ---------------------------
    // Editor Tabs
    // ---------------------------
    "tab.activeBackground": "#fff7ec",
    "tab.unfocusedActiveBackground": "#f7f2e3",
    "tab.activeForeground": "#735A3C",
    "tab.border": "#e6d7b2",
    "tab.inactiveBackground": "#ffe4bc",
    "tab.inactiveForeground": "#7b623e",
    "tab.unfocusedActiveForeground": "#7b623e",
    "tab.unfocusedInactiveForeground": "#7b623e",
    "tab.activeBorderTop": "#ffaa76",
    "tab.activeModifiedBorder": "#e65800",
    "tab.activeBorder": "#fff7ec",
    "tab.unfocusedActiveBorder": "#fff7ec00",
    "tab.unfocusedHoverBackground": "#735A3C21",
    // ---------------------------
    // Text Colors
    // ---------------------------
    "textBlockQuote.background": "#ffe4bc",
    "textBlockQuote.border": "#B65C7A",
    "textCodeBlock.background": "#ffe4bc",
    "textLink.activeForeground": "#B65C7A",
    "textLink.foreground": "#B65C7A",
    "textPreformat.foreground": "#B65C7A",
    "textSeparator.foreground": "#ffe4bc",
    // ---------------------------
    // Welcome Page
    // ---------------------------
    "walkThrough.embeddedEditorBackground": "#ffe4bc",
    "welcomePage.buttonBackground": "#ffe4bc",
    "welcomePage.buttonHoverBackground": "#e1e0d0",
    // ---------------------------
    // Input Control
    // ---------------------------
    "input.background": "#ffe4bc",
    "input.border": "#ffdd95",
    "input.foreground": "#7b623e",
    "input.placeholderForeground": "#807a73",
    "inputOption.activeBorder": "#735A3C",
    "inputValidation.errorBackground": "#ff2d1941",
    "inputValidation.errorBorder": "#ff2d19",
    "inputValidation.infoBackground": "#e6cba8cc",
    "inputValidation.infoBorder": "#d1a97d",
    "inputValidation.warningBackground": "#ffa587cc",
    "inputValidation.warningBorder": "#ffa487",
    // ---------------------------
    // Editor Widgets
    // ---------------------------
    "editorWidget.background": "#ffdd95",
    "editorWidget.border": "#ff9767",
    "editorHoverWidget.background": "#ffe4bc",
    "editorHoverWidget.border": "#ff9767",
    "editorSuggestWidget.background": "#ffdd95",
    "editorSuggestWidget.border": "#ff9767",
    "editorSuggestWidget.foreground": "#735A3C",
    "editorSuggestWidget.highlightForeground": "#735A3C",
    "editorSuggestWidget.selectedBackground": "#ffdd95",
    // ---------------------------
    // Gutter
    // ---------------------------
    "editorGutter.background": "#fff7ec",
    "editorGutter.addedBackground": "#5d9936",
    "editorGutter.deletedBackground": "#ff2d19",
    "editorGutter.modifiedBackground": "#e65800",
    // ---------------------------
    // Selection Colors
    // ---------------------------
    "editor.selectionBackground": "#bad09577",
    "editor.selectionHighlightBackground": "#B65C7A55",
    "editor.selectionHighlightBorder": "#B65C7A00",
    "editor.inactiveSelectionBackground": "#bad09555",
    "editor.wordHighlightStrongBackground": "#b5890027",
    "editor.wordHighlightStrongBorder": "#b5890000",
    "editor.wordHighlightBackground": "#B65C7A22",
    "editor.wordHighlightBorder": "#B65C7A00",
    "editor.findMatchBackground": "#8ce99a55",
    "editor.findMatchBorder": "#8ce99a00",
    "editor.findMatchHighlightBackground": "#B65C7A55",
    "editor.findMatchHighlightBorder": "#B65C7A00",
    "editor.findRangeHighlightBackground": "#bfa35e55",
    "editor.findRangeHighlightBorder": "#bfa35e00",
    "editor.hoverHighlightBackground": "#735A3C1f",
    "editor.lineHighlightBackground": "#ffe4bccc",
    "editor.lineHighlightBorder": "#ffe4bc00",
    "editor.rangeHighlightBackground": "#f1e9d5a1",
    "editorLink.activeForeground": "#B65C7A",
    "editorLink.foreground": "#B65C7A",
    "editorWhitespace.foreground": "#ffaa76bb",
    "editorIndentGuide.background": "#ffaa7650",
    "editorIndentGuide.activeBackground": "#e65800",
    "editorBracketMatch.background": "#735A3C20",
    "editorBracketMatch.border": "#735A3C",
    "editorRuler.foreground": "#f1e6d0",
    // ---------------------------
    // Code Lens
    // ---------------------------
    "editorCodeLens.foreground": "#7b623e",
    // ---------------------------
    // Integrated Terminal Colors
    // ---------------------------
    "terminal.ansiBlack": "#4a3a30",
    "terminal.ansiRed": "#ff2d19",
    "terminal.ansiGreen": "#5d9936",
    "terminal.ansiYellow": "#ffd35b",
    "terminal.ansiBlue": "#6a5e7f",
    "terminal.ansiMagenta": "#9b5e75",
    "terminal.ansiCyan": "#8fa58f",
    "terminal.ansiWhite": "#8ca6a6",
    "terminal.ansiBrightBlack": "#004d57",
    "terminal.ansiBrightRed": "#ff0000",
    "terminal.ansiBrightGreen": "#77a65f",
    "terminal.ansiBrightYellow": "#ff8c00",
    "terminal.ansiBrightBlue": "#8a7e9f",
    "terminal.ansiBrightMagenta": "#c97a95",
    "terminal.ansiBrightCyan": "#a8c3a8",
    "terminal.ansiBrightWhite": "#bbc3c4",
    "terminal.background": "#fce2bb",
    "terminal.foreground": "#664a23",
    "terminalCursor.background": "#fce2bb",
    "terminalCursor.foreground": "#664a23",
    // ---------------------------
    // Merge
    // ---------------------------
    "merge.border": "#fff7ec00",
    "merge.currentContentBackground": "#B65C7A33",
    "merge.currentHeaderBackground": "#B65C7A55",
    "merge.incomingContentBackground": "#735A3C33",
    "merge.incomingHeaderBackground": "#735A3C55",
    "merge.commonContentBackground": "#ffc18033",
    "merge.commonHeaderBackground": "#ffc18055",
    "editorOverviewRuler.currentContentForeground": "#B65C7A55",
    "editorOverviewRuler.incomingContentForeground": "#735A3C55",
    "editorOverviewRuler.commonContentForeground": "#ffc18055",
    "editorOverviewRuler.border": "#fff7ec",
    // ---------------------------
    // Notification Colors
    // ---------------------------
    "notificationCenter.border": "#ffdd95",
    "notificationCenterHeader.foreground": "#664a23",
    "notificationCenterHeader.background": "#ffdd95",
    "notificationToast.border": "#ffdd95",
    "notifications.foreground": "#664a23",
    "notifications.background": "#ffdd95",
    "notifications.border": "#ffdd95",
    "notificationLink.foreground": "#735A3C",
    // ---------------------------
    // Diff
    // ---------------------------
    "diffEditor.insertedTextBackground": "#5d993630",
    "diffEditor.removedTextBackground": "#ff2d1922",
    // ---------------------------
    // Debug
    // ---------------------------
    "debugToolBar.background": "#ffe4bc",
    "debugExceptionWidget.background": "#ffe4bc",
    "debugExceptionWidget.border": "#735A3C",
    // ---------------------------
    // Extensions
    // ---------------------------
    "extensionButton.prominentBackground": "#ffaa76",
    "extensionButton.prominentForeground": "#fff7ec",
    "extensionButton.prominentHoverBackground": "#ff9767",
    focusBorder: "#ffdd95",
    foreground: "#664a23",
    // ---------------------------
    // Panel
    // ---------------------------
    "panel.background": "#fce2bb",
    "panel.border": "#ffaa76",
    "panelTitle.activeBorder": "#552C41",
    "panelTitle.activeForeground": "#735A3C",
    "panelTitle.inactiveForeground": "#7b623e",
    // ---------------------------
    // Peek View Colors
    // ---------------------------
    "peekView.border": "#735A3C",
    "peekViewEditor.background": "#fff7e5",
    "peekViewEditor.matchHighlightBackground": "#B65C7A55",
    "peekViewEditor.matchHighlightBorder": "#B65C7A79",
    "peekViewEditorGutter.background": "#fff7e5",
    "peekViewResult.background": "#ffe4bc",
    "peekViewResult.fileForeground": "#B65C7A",
    "peekViewResult.lineForeground": "#7b623e",
    "peekViewResult.matchHighlightBackground": "#ffdd95",
    "peekViewResult.selectionBackground": "#ffdd95",
    "peekViewResult.selectionForeground": "#735A3C",
    "peekViewTitle.background": "#ffe4bc",
    "peekViewTitleDescription.foreground": "#7b623e",
    "peekViewTitleLabel.foreground": "#B65C7A",
    // ---------------------------
    // Progress Bar
    // ---------------------------
    "progressBar.background": "#e69533",
    // ---------------------------
    // Scroll Bar
    // ---------------------------
    "scrollbar.shadow": "#735A3C55",
    "scrollbarSlider.activeBackground": "#B65C7Aad",
    "scrollbarSlider.background": "#DE94A45b",
    "scrollbarSlider.hoverBackground": "#B65C7A62",
    // ---------------------------
    // Git status colors in File Explorer
    // ---------------------------
    "gitDecoration.addedResourceForeground": "#5d9936",
    "gitDecoration.modifiedResourceForeground": "#e65800",
    "gitDecoration.deletedResourceForeground": "#ff2d19",
    "gitDecoration.untrackedResourceForeground": "#5d9936",
    "gitDecoration.ignoredResourceForeground": "#7b623eaa",
    "gitDecoration.conflictingResourceForeground": "#B65C7A",
    // ---------------------------
    // Quick Picker
    // ---------------------------
    "pickerGroup.border": "#735A3C",
    "pickerGroup.foreground": "#735A3C",
    // ---------------------------
    // Lists and Trees
    // ---------------------------
    "list.activeSelectionBackground": "#ffc998",
    "list.activeSelectionForeground": "#664a23",
    "list.dropBackground": "#ffc99865",
    "list.focusBackground": "#ffdd95",
    "list.focusForeground": "#664a23",
    "list.highlightForeground": "#735A3C",
    "list.hoverBackground": "#ffc998",
    "list.hoverForeground": "#664a23",
    "list.inactiveFocusBackground": "#ffdd95",
    "list.inactiveSelectionBackground": "#ffcb9c",
    "list.inactiveSelectionForeground": "#452f1b",
    "list.errorForeground": "#ff2d19",
    "list.warningForeground": "#e07a52",
    "listFilterWidget.background": "#ffcda0",
    "listFilterWidget.outline": "#d18f52",
    "listFilterWidget.noMatchesOutline": "#ff2d19",
    "tree.indentGuidesStroke": "#d3cec5",
    // ---------------------------
    // Settings Editor Colors
    // ---------------------------
    "settings.headerForeground": "#552C41",
    "settings.modifiedItemIndicator": "#e69533",
    "settings.dropdownListBorder": "#bad09588",
    "settings.dropdownBackground": "#ffdd95",
    "settings.dropdownForeground": "#735A3C",
    "settings.dropdownBorder": "#ffdd95",
    "settings.checkboxBackground": "#ffdd95",
    "settings.checkboxForeground": "#735A3C",
    "settings.checkboxBorder": "#ffdd95",
    "settings.textInputBackground": "#ffdd95",
    "settings.textInputForeground": "#664a23",
    "settings.textInputBorder": "#ffdd95",
    "settings.numberInputBackground": "#f0e7d1",
    "settings.numberInputForeground": "#d19a66",
    "settings.numberInputBorder": "#f0e7d1",
    // ---------------------------
    // Breadcrumbs
    // ---------------------------
    "breadcrumb.foreground": "#7b623e",
    "breadcrumb.background": "#fff7ec",
    "breadcrumb.focusForeground": "#735A3C",
    "breadcrumb.activeSelectionForeground": "#664a23",
    "breadcrumbPicker.background": "#ffdd95",
    // ---------------------------
    // Title bar
    // Note: These colors are currently only supported on macOS.
    // ---------------------------
    "titleBar.activeBackground": "#ffe4bc",
    "titleBar.activeForeground": "#664a23",
    "titleBar.inactiveBackground": "#ffe4bc",
    "titleBar.inactiveForeground": "#7b623e",
    // ---------------------------
    // Custom title bar and menus
    // Note: These colors are currently only supported on Windows and Linux.
    // ---------------------------
    "menu.background": "#ffdd95",
    "menu.foreground": "#7b623e",
    "menu.selectionBackground": "#ffcb9c",
    "menu.selectionForeground": "#735A3C",
    "menu.selectionBorder": "#ffdd95",
    "menubar.selectionBackground": "#ffcb9c",
    "menubar.selectionForeground": "#735A3C",
    "menubar.selectionBorder": "#ffdd95",
    // ---------------------------
    // Snippets
    // ---------------------------
    "editor.snippetTabstopHighlightBackground": "#fdefd3",
    "editor.snippetTabstopHighlightBorder": "#fdf3dd",
    "editor.snippetFinalTabstopHighlightBackground": "#fdefd3",
    "editor.snippetFinalTabstopHighlightBorder": "#fdf3dd",
    // ---------------------------
    // Minimap
    // ---------------------------
    "minimap.findMatchHighlight": "#ffd35baa",
    "minimap.errorHighlight": "#ff2d19ee",
    "minimap.warningHighlight": "#e69533ee",
    "minimapGutter.addedBackground": "#5d9936",
    "minimapGutter.modifiedBackground": "#e65800",
    "minimapGutter.deletedBackground": "#ff2d19",
    "minimap.background": "#fff7ec99",
  },
  tokenColors: syntax,
});
