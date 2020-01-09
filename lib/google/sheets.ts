import { sheets_v4 } from 'googleapis';

import { arrayOfType } from '../../src/array-of-type';
import { booleanType } from '../../src/boolean-type';
import { Type } from '../../src/core/type';
import { hasPropertiesType } from '../../src/has-properties-type';
import { nullableType } from '../../src/nullable-type';
import { numberType } from '../../src/number-type';
import { optionalType } from '../../src/optional-type';
import { stringRecordType } from '../../src/string-record-type';
import { stringType } from '../../src/string-type';


export const COLOR_TYPE: Type<sheets_v4.Schema$Color> = hasPropertiesType({
  alpha: optionalType(nullableType(numberType)),
  blue: optionalType(nullableType(numberType)),
  green: optionalType(nullableType(numberType)),
  red: optionalType(nullableType(numberType)),
});

export const BORDER_TYPE: Type<sheets_v4.Schema$Border> = hasPropertiesType({
  color: optionalType(COLOR_TYPE),
  style: optionalType(nullableType(stringType)),
  width: optionalType(nullableType(numberType)),
});

export const BORDERS_TYPE: Type<sheets_v4.Schema$Borders> = hasPropertiesType({
  bottom: optionalType(BORDER_TYPE),
  left: optionalType(BORDER_TYPE),
  right: optionalType(BORDER_TYPE),
  top: optionalType(BORDER_TYPE),
});

export const NUMBER_FORMAT_TYPE: Type<sheets_v4.Schema$NumberFormat> = hasPropertiesType({
  pattern: optionalType(nullableType(stringType)),
  type: optionalType(nullableType(stringType)),
});

export const PADDING_TYPE: Type<sheets_v4.Schema$Padding> = hasPropertiesType({
  bottom: optionalType(nullableType(numberType)),
  left: optionalType(nullableType(numberType)),
  right: optionalType(nullableType(numberType)),
  top: optionalType(nullableType(numberType)),
});

export const TEXT_FORMAT_TYPE: Type<sheets_v4.Schema$TextFormat> = hasPropertiesType({
  bold: optionalType(nullableType(booleanType)),
  fontFamilty: optionalType(nullableType(stringType)),
  fontSize: optionalType(nullableType(numberType)),
  foregroundColor: optionalType(COLOR_TYPE),
  italic: optionalType(nullableType(booleanType)),
  strikethrough: optionalType(nullableType(booleanType)),
  underline: optionalType(nullableType(booleanType)),
});

export const TEXT_ROTATION_TYPE: Type<sheets_v4.Schema$TextRotation> = hasPropertiesType({
  angle: optionalType(nullableType(numberType)),
  vertical: optionalType(nullableType(booleanType)),
});

export const BANDING_PROPERTIES_TYPE: Type<sheets_v4.Schema$BandingProperties> = hasPropertiesType({
  firstBandColor: optionalType(COLOR_TYPE),
  footerColor: optionalType(COLOR_TYPE),
  headerColor: optionalType(COLOR_TYPE),
  secondBandColor: optionalType(COLOR_TYPE),
});

export const CELL_FORMAT_TYPE: Type<sheets_v4.Schema$CellFormat> = hasPropertiesType({
  backgroundColor: optionalType(COLOR_TYPE),
  borders: optionalType(BORDERS_TYPE),
  horizontalAlignment: optionalType(nullableType(stringType)),
  hyperlinkDisplayType: optionalType(nullableType(stringType)),
  numberFormat: optionalType(NUMBER_FORMAT_TYPE),
  padding: optionalType(PADDING_TYPE),
  textDirection: optionalType(nullableType(stringType)),
  textFormat: optionalType(TEXT_FORMAT_TYPE),
  textRotation: optionalType(TEXT_ROTATION_TYPE),
  verticalAlignment: optionalType(nullableType(stringType)),
  wrapStrategy: optionalType(nullableType(stringType)),
});

export const DIMENSION_RANGE_TYPE: Type<sheets_v4.Schema$DimensionRange> = hasPropertiesType({
  dimension: optionalType(nullableType(stringType)),
  endIndex: optionalType(nullableType(numberType)),
  sheetId: optionalType(nullableType(numberType)),
  startIndex: optionalType(nullableType(numberType)),
});

export const DEVELOPER_METADATA_LOCATION_TYPE: Type<sheets_v4.Schema$DeveloperMetadataLocation> =
    hasPropertiesType({
      dimensionRange: optionalType(DIMENSION_RANGE_TYPE),
      locationType: optionalType(nullableType(stringType)),
      sheetId: optionalType(nullableType(numberType)),
      spreadsheet: optionalType(nullableType(booleanType)),
    });

export const DEVELOPER_METADATA_TYPE: Type<sheets_v4.Schema$DeveloperMetadata> = hasPropertiesType({
  location: optionalType(DEVELOPER_METADATA_LOCATION_TYPE),
  metadataId: optionalType(nullableType(numberType)),
  metadataKey: optionalType(nullableType(stringType)),
  metadataValue: optionalType(nullableType(stringType)),
  visibility: optionalType(nullableType(stringType)),
});

export const GRID_RANGE_TYPE: Type<sheets_v4.Schema$GridRange> = hasPropertiesType({
  endColumnIndex: optionalType(nullableType(numberType)),
  endRowIndex: optionalType(nullableType(numberType)),
  sheetId: optionalType(nullableType(numberType)),
  startColumnIndex: optionalType(nullableType(numberType)),
  startRowIndex: optionalType(nullableType(numberType)),
});

export const BANDED_RANGE_TYPE: Type<sheets_v4.Schema$BandedRange> = hasPropertiesType({
  bandedRangeId: optionalType(nullableType(numberType)),
  columnProperties: optionalType(BANDING_PROPERTIES_TYPE),
  range: optionalType(GRID_RANGE_TYPE),
  rowProperties: optionalType(BANDING_PROPERTIES_TYPE),
});

export const CONDITION_VALUE_TYPE: Type<sheets_v4.Schema$ConditionValue> = hasPropertiesType({
  relativeDate: optionalType(nullableType(stringType)),
  userEnteredValue: optionalType(nullableType(stringType)),
});

export const BOOLEAN_CONDITION_TYPE: Type<sheets_v4.Schema$BooleanCondition> = hasPropertiesType({
  type: optionalType(nullableType(stringType)),
  values: optionalType(arrayOfType(CONDITION_VALUE_TYPE)),
});

export const CHART_AXIS_VIEW_WINDOW_OPTIONS_TYPE: Type<sheets_v4.Schema$ChartAxisViewWindowOptions>
    = hasPropertiesType({
      viewWindowMax: optionalType(nullableType(numberType)),
      viewWindowMin: optionalType(nullableType(numberType)),
      viewWindowMode: optionalType(nullableType(stringType)),
    });

export const FILTER_CRITERIA_TYPE: Type<sheets_v4.Schema$FilterCriteria> = hasPropertiesType({
  condition: optionalType(BOOLEAN_CONDITION_TYPE),
  endRowIndex: optionalType(nullableType(arrayOfType(stringType))),
});

export const SORT_SPEC_TYPE: Type<sheets_v4.Schema$SortSpec> = hasPropertiesType({
  dimensionIndex: optionalType(nullableType(numberType)),
  sortOrder: optionalType(nullableType(stringType)),
});

export const TEXT_POSITION_TYPE: Type<sheets_v4.Schema$TextPosition> = hasPropertiesType({
  horizontalAlignment: optionalType(nullableType(stringType)),
});

export const BASIC_CHART_AXIS_TYPE: Type<sheets_v4.Schema$BasicChartAxis> = hasPropertiesType({
  format: optionalType(TEXT_FORMAT_TYPE),
  position: optionalType(nullableType(stringType)),
  title: optionalType(nullableType(stringType)),
  titleTextPosition: optionalType(TEXT_POSITION_TYPE),
  viewWindowOptions: optionalType(CHART_AXIS_VIEW_WINDOW_OPTIONS_TYPE),
});

export const CHART_SOURCE_RANGE_TYPE: Type<sheets_v4.Schema$ChartSourceRange> = hasPropertiesType({
  sources: optionalType(arrayOfType(GRID_RANGE_TYPE)),
});

export const CHART_DATA_TYPE: Type<sheets_v4.Schema$ChartData> = hasPropertiesType({
  sourceRange: optionalType(CHART_SOURCE_RANGE_TYPE),
});

export const BASIC_CHART_DOMAIN_TYPE: Type<sheets_v4.Schema$BasicChartDomain> = hasPropertiesType({
  domain: optionalType(CHART_DATA_TYPE),
  reversed: optionalType(nullableType(booleanType)),
});

export const LINE_STYLE_DATA: Type<sheets_v4.Schema$LineStyle> = hasPropertiesType({
  type: optionalType(nullableType(stringType)),
  width: optionalType(nullableType(numberType)),
});

export const BASIC_CHART_SERIES_TYPE: Type<sheets_v4.Schema$BasicChartSeries> = hasPropertiesType({
  color: optionalType(COLOR_TYPE),
  lineStyle: optionalType(LINE_STYLE_DATA),
  series: optionalType(CHART_DATA_TYPE),
  targetAxis: optionalType(nullableType(stringType)),
  type: optionalType(nullableType(stringType)),
});

export const BASIC_CHART_SPEC_TYPE: Type<sheets_v4.Schema$BasicChartSpec> = hasPropertiesType({
  axis: optionalType(arrayOfType(BASIC_CHART_AXIS_TYPE)),
  chartType: optionalType(nullableType(stringType)),
  compareMode: optionalType(nullableType(stringType)),
  domains: optionalType(arrayOfType(BASIC_CHART_DOMAIN_TYPE)),
  headerCount: optionalType(nullableType(numberType)),
  interpolateNulls: optionalType(nullableType(booleanType)),
  legendPosition: optionalType(nullableType(stringType)),
  lineSmoothing: optionalType(nullableType(booleanType)),
  series: optionalType(arrayOfType(BASIC_CHART_SERIES_TYPE)),
  stackedType: optionalType(nullableType(stringType)),
  threeDimensional: optionalType(nullableType(booleanType)),
});

export const BASIC_FILTER_TYPE: Type<sheets_v4.Schema$BasicFilter> = hasPropertiesType({
  criteria: optionalType(stringRecordType(FILTER_CRITERIA_TYPE)),
  range: optionalType(GRID_RANGE_TYPE),
  sortSpecs: optionalType(arrayOfType(SORT_SPEC_TYPE)),
});

export const BOOLEAN_RULE_TYPE: Type<sheets_v4.Schema$BooleanRule> = hasPropertiesType({
  condition: optionalType(BOOLEAN_CONDITION_TYPE),
  format: optionalType(CELL_FORMAT_TYPE),
});

export const BUBBLE_CHART_SPEC_TYPE: Type<sheets_v4.Schema$BubbleChartSpec> = hasPropertiesType({
  bubbleBorderColor: optionalType(COLOR_TYPE),
  bubbleLabels: optionalType(CHART_DATA_TYPE),
  bubbleMaxRadiusSize: optionalType(nullableType(numberType)),
  bubbleMinRadiusSize: optionalType(nullableType(numberType)),
  bubbleOpacity: optionalType(nullableType(numberType)),
  bubbleSizes: optionalType(CHART_DATA_TYPE),
  bubbleTextStyle: optionalType(TEXT_FORMAT_TYPE),
  domain: optionalType(CHART_DATA_TYPE),
  groupIds: optionalType(CHART_DATA_TYPE),
  legendPosition: optionalType(nullableType(stringType)),
  series: optionalType(CHART_DATA_TYPE),
});

export const CANDLESTICK_SERIES_TYPE: Type<sheets_v4.Schema$CandlestickSeries> = hasPropertiesType({
  data: optionalType(CHART_DATA_TYPE),
});

export const CANDLESTICK_DATA_TYPE: Type<sheets_v4.Schema$CandlestickData> = hasPropertiesType({
  closeSeries: optionalType(CANDLESTICK_SERIES_TYPE),
  highSeries: optionalType(CANDLESTICK_SERIES_TYPE),
  lowSeries: optionalType(CANDLESTICK_SERIES_TYPE),
  openSeries: optionalType(CANDLESTICK_SERIES_TYPE),
});

export const CANDLESTICK_DOMAIN_TYPE: Type<sheets_v4.Schema$CandlestickDomain> = hasPropertiesType({
  data: optionalType(CHART_DATA_TYPE),
  reversed: optionalType(nullableType(booleanType)),
});

export const CANDLESTICK_CHART_SPEC_TYPE: Type<sheets_v4.Schema$CandlestickChartSpec> =
    hasPropertiesType({
      data: optionalType(arrayOfType(CANDLESTICK_DATA_TYPE)),
      domain: optionalType(CANDLESTICK_DOMAIN_TYPE),
    });

export const DATA_VALIDATION_RULE_TYPE: Type<sheets_v4.Schema$DataValidationRule> =
    hasPropertiesType({
      condition: optionalType(BOOLEAN_CONDITION_TYPE),
      inputMessage: optionalType(nullableType(stringType)),
      showCustomUi: optionalType(nullableType(booleanType)),
      strict: optionalType(nullableType(booleanType)),
    });

export const DATE_TIME_RULE_TYPE: Type<sheets_v4.Schema$DateTimeRule> = hasPropertiesType({
  type: optionalType(nullableType(stringType)),
});

export const ERROR_VALUE_TYPE: Type<sheets_v4.Schema$ErrorValue> = hasPropertiesType({
  message: optionalType(nullableType(stringType)),
  type: optionalType(nullableType(stringType)),
});

export const HISTOGRAM_RULE_TYPE: Type<sheets_v4.Schema$HistogramRule> = hasPropertiesType({
  end: optionalType(nullableType(numberType)),
  interval: optionalType(nullableType(numberType)),
  start: optionalType(nullableType(numberType)),
});

export const EXTENDED_VALUE_TYPE: Type<sheets_v4.Schema$ExtendedValue> = hasPropertiesType({
  boolValue: optionalType(nullableType(booleanType)),
  errorValue: optionalType(ERROR_VALUE_TYPE),
  formulaValue: optionalType(nullableType(stringType)),
  numberValue: optionalType(nullableType(numberType)),
  stringValue: optionalType(nullableType(stringType)),
});

export const MANUAL_RULE_GROUP_TYPE: Type<sheets_v4.Schema$ManualRuleGroup> = hasPropertiesType({
  groupName: optionalType(EXTENDED_VALUE_TYPE),
  items: optionalType(arrayOfType(EXTENDED_VALUE_TYPE)),
});

export const MANUAL_RULE_TYPE: Type<sheets_v4.Schema$ManualRule> = hasPropertiesType({
  groups: optionalType(arrayOfType(MANUAL_RULE_GROUP_TYPE)),
});

export const PIVOT_GROUP_RULE_TYPE: Type<sheets_v4.Schema$PivotGroupRule> = hasPropertiesType({
  dateTimeRule: optionalType(DATE_TIME_RULE_TYPE),
  histogramRule: optionalType(HISTOGRAM_RULE_TYPE),
  manualRule: optionalType(MANUAL_RULE_TYPE),
});

export const PIVOT_GROUP_SORT_VALUE_BUCKET_TYPE: Type<sheets_v4.Schema$PivotGroupSortValueBucket> =
    hasPropertiesType({
      buckets: optionalType(arrayOfType(EXTENDED_VALUE_TYPE)),
      valuesIndex: optionalType(nullableType(numberType)),
    });

export const PIVOT_GROUP_VALUE_METADATA_TYPE: Type<sheets_v4.Schema$PivotGroupValueMetadata> =
      hasPropertiesType({
        collapsed: optionalType(nullableType(booleanType)),
        value: optionalType(EXTENDED_VALUE_TYPE),
      });

export const PIVOT_GROUP_TYPE: Type<sheets_v4.Schema$PivotGroup> = hasPropertiesType({
  groupRule: optionalType(PIVOT_GROUP_RULE_TYPE),
  label: optionalType(nullableType(stringType)),
  repeatHeadings: optionalType(nullableType(booleanType)),
  showTotals: optionalType(nullableType(booleanType)),
  sortOrder: optionalType(nullableType(stringType)),
  sourceColumnOffset: optionalType(nullableType(numberType)),
  valueBucket: optionalType(PIVOT_GROUP_SORT_VALUE_BUCKET_TYPE),
  valueMetadata: optionalType(arrayOfType(PIVOT_GROUP_VALUE_METADATA_TYPE)),
});

export const PIVOT_FILTER_CRITERIA_TYPE: Type<sheets_v4.Schema$PivotFilterCriteria> =
    hasPropertiesType({
      visibleValues: optionalType(nullableType(arrayOfType(stringType))),
    });

export const PIVOT_VALUE_TYPE: Type<sheets_v4.Schema$PivotValue> = hasPropertiesType({
  calculatedDisplayType: optionalType(nullableType(stringType)),
  formula: optionalType(nullableType(stringType)),
  name: optionalType(nullableType(stringType)),
  sourceColumnOffset: optionalType(nullableType(numberType)),
  summarizeFunction: optionalType(nullableType(stringType)),
});

export const PIVOT_TABLE_TYPE: Type<sheets_v4.Schema$PivotTable> = hasPropertiesType({
  columns: optionalType(arrayOfType(PIVOT_GROUP_TYPE)),
  criteria: optionalType(nullableType(stringRecordType(PIVOT_FILTER_CRITERIA_TYPE))),
  rows: optionalType(arrayOfType(PIVOT_GROUP_TYPE)),
  source: optionalType(GRID_RANGE_TYPE),
  valueLayout: optionalType(nullableType(stringType)),
  values: optionalType(arrayOfType(PIVOT_VALUE_TYPE)),
});

export const TEXT_FORMAT_RUN_TYPE: Type<sheets_v4.Schema$TextFormatRun> = hasPropertiesType({
  format: optionalType(TEXT_FORMAT_TYPE),
  startIndex: optionalType(nullableType(numberType)),
});

export const CELL_DATA_TYPE: Type<sheets_v4.Schema$CellData> = hasPropertiesType({
  dataValidation: optionalType(DATA_VALIDATION_RULE_TYPE),
  effectiveFormat: optionalType(CELL_FORMAT_TYPE),
  effectiveValue: optionalType(EXTENDED_VALUE_TYPE),
  formattedValue: optionalType(nullableType(stringType)),
  hyperlink: optionalType(nullableType(stringType)),
  note: optionalType(nullableType(stringType)),
  pivotTable: optionalType(PIVOT_TABLE_TYPE),
  textFormatRuns: optionalType(arrayOfType(TEXT_FORMAT_RUN_TYPE)),
  userEnteredFormat: optionalType(CELL_FORMAT_TYPE),
  userEnteredValue: optionalType(EXTENDED_VALUE_TYPE),

});

export const INTERPOLATION_POINT_TYPE: Type<sheets_v4.Schema$InterpolationPoint> =
    hasPropertiesType({
      color: optionalType(COLOR_TYPE),
      type: optionalType(nullableType(stringType)),
      value: optionalType(nullableType(stringType)),
    });

export const GRADIENT_RULE_TYPE: Type<sheets_v4.Schema$GradientRule> = hasPropertiesType({
  maxpoint: optionalType(INTERPOLATION_POINT_TYPE),
  midpoint: optionalType(INTERPOLATION_POINT_TYPE),
  minpoint: optionalType(INTERPOLATION_POINT_TYPE),
});

export const HISTOGRAM_SERIES_TYPE: Type<sheets_v4.Schema$HistogramSeries> = hasPropertiesType({
  barColor: optionalType(COLOR_TYPE),
  data: optionalType(CHART_DATA_TYPE),
});

export const HISTOGRAM_CHART_SPEC_TYPE: Type<sheets_v4.Schema$HistogramChartSpec> =
    hasPropertiesType({
      bucketSize: optionalType(nullableType(numberType)),
      legendPosition: optionalType(nullableType(stringType)),
      outlierPercentile: optionalType(nullableType(numberType)),
      series: optionalType(arrayOfType(HISTOGRAM_SERIES_TYPE)),
      showItemDividers: optionalType(nullableType(booleanType)),
    });

export const LINE_STYLE_TYPE: Type<sheets_v4.Schema$LineStyle> = hasPropertiesType({
  type: optionalType(nullableType(stringType)),
  width: optionalType(nullableType(numberType)),
});

export const ORG_CHART_SPEC_TYPE: Type<sheets_v4.Schema$OrgChartSpec> = hasPropertiesType({
  labels: optionalType(CHART_DATA_TYPE),
  nodeColor: optionalType(COLOR_TYPE),
  nodeSize: optionalType(nullableType(stringType)),
  parentLabels: optionalType(CHART_DATA_TYPE),
  selectedNodeColor: optionalType(COLOR_TYPE),
  tooltips: optionalType(CHART_DATA_TYPE),
});

export const PIE_CHART_SPEC_TYPE: Type<sheets_v4.Schema$PieChartSpec> = hasPropertiesType({
  domain: optionalType(CHART_DATA_TYPE),
  legendPosition: optionalType(nullableType(stringType)),
  pieHole: optionalType(nullableType(numberType)),
  series: optionalType(CHART_DATA_TYPE),
  threeDimensional: optionalType(nullableType(booleanType)),
});

export const TREEMAP_CHART_COLOR_SCALE_TYPE: Type<sheets_v4.Schema$TreemapChartColorScale> =
    hasPropertiesType({
      maxValueColor: optionalType(COLOR_TYPE),
      midValueColor: optionalType(COLOR_TYPE),
      minValueColor: optionalType(COLOR_TYPE),
      noDataColor: optionalType(COLOR_TYPE),
    });

export const TREEMAP_CHART_SPEC_TYPE: Type<sheets_v4.Schema$TreemapChartSpec> = hasPropertiesType({
  colorData: optionalType(CHART_DATA_TYPE),
  colorScale: optionalType(TREEMAP_CHART_COLOR_SCALE_TYPE),
  headerColor: optionalType(COLOR_TYPE),
  hideTooltips: optionalType(nullableType(booleanType)),
  hintedLevels: optionalType(nullableType(numberType)),
  labels: optionalType(CHART_DATA_TYPE),
  levels: optionalType(nullableType(numberType)),
  maxValue: optionalType(nullableType(numberType)),
  minValue: optionalType(nullableType(numberType)),
  parentLabels: optionalType(CHART_DATA_TYPE),
  sizeData: optionalType(CHART_DATA_TYPE),
  textFormat: optionalType(TEXT_FORMAT_TYPE),
});

export const WATERFALL_CHART_COLUMN_STYLE_TYPE: Type<sheets_v4.Schema$WaterfallChartColumnStyle> =
    hasPropertiesType({
      color: optionalType(COLOR_TYPE),
      label: optionalType(nullableType(stringType)),
    });

export const WATERFALL_CHART_CUSTOM_SUBTOTAL_TYPE
    : Type<sheets_v4.Schema$WaterfallChartCustomSubtotal> = hasPropertiesType({
      dataIsSubtotal: optionalType(nullableType(booleanType)),
      label: optionalType(nullableType(stringType)),
      subtotalIndex: optionalType(nullableType(numberType)),
    });

export const WATERFALL_CHART_DOMAIN_TYPE: Type<sheets_v4.Schema$WaterfallChartDomain> =
    hasPropertiesType({
      data: optionalType(CHART_DATA_TYPE),
      reversed: optionalType(nullableType(booleanType)),
    });

export const WATERFALL_CHART_SERIES_TYPE: Type<sheets_v4.Schema$WaterfallChartSeries> =
    hasPropertiesType({
      customSubtotals: optionalType(arrayOfType(WATERFALL_CHART_CUSTOM_SUBTOTAL_TYPE)),
      data: optionalType(CHART_DATA_TYPE),
      hideTrailingSubtotal: optionalType(nullableType(booleanType)),
      negativeColumnsStyle: optionalType(WATERFALL_CHART_COLUMN_STYLE_TYPE),
      positiveColumnsStyle: optionalType(WATERFALL_CHART_COLUMN_STYLE_TYPE),
      subtotalColumnsStyle: optionalType(WATERFALL_CHART_COLUMN_STYLE_TYPE),
    });

export const WATERFALL_CHART_SPEC_TYPE: Type<sheets_v4.Schema$WaterfallChartSpec> =
    hasPropertiesType({
      connectorLineStyle: optionalType(LINE_STYLE_TYPE),
      domain: optionalType(WATERFALL_CHART_DOMAIN_TYPE),
      firstValueIsTotal: optionalType(nullableType(booleanType)),
      hideConnectorLines: optionalType(nullableType(booleanType)),
      series: optionalType(arrayOfType(WATERFALL_CHART_SERIES_TYPE)),
      stackedType: optionalType(nullableType(stringType)),
    });

export const CHART_SPEC_TYPE: Type<sheets_v4.Schema$ChartSpec> = hasPropertiesType({
  altText: optionalType(nullableType(stringType)),
  backgroundColor: optionalType(COLOR_TYPE),
  basicChart: optionalType(BASIC_CHART_SPEC_TYPE),
  bubbleChart: optionalType(BUBBLE_CHART_SPEC_TYPE),
  candlestickChart: optionalType(CANDLESTICK_CHART_SPEC_TYPE),
  fontName: optionalType(nullableType(stringType)),
  hiddenDimensionStrategy: optionalType(nullableType(stringType)),
  histogramChart: optionalType(HISTOGRAM_CHART_SPEC_TYPE),
  maximized: optionalType(nullableType(booleanType)),
  orgChart: optionalType(ORG_CHART_SPEC_TYPE),
  pieChart: optionalType(PIE_CHART_SPEC_TYPE),
  subtitle: optionalType(nullableType(stringType)),
  subtitleTextFormat: optionalType(TEXT_FORMAT_TYPE),
  subtitleTextPosition: optionalType(TEXT_POSITION_TYPE),
  title: optionalType(nullableType(stringType)),
  titleTextFormat: optionalType(TEXT_FORMAT_TYPE),
  titleTextPosition: optionalType(TEXT_POSITION_TYPE),
  treemapChart: optionalType(TREEMAP_CHART_SPEC_TYPE),
  waterfallChart: optionalType(WATERFALL_CHART_SPEC_TYPE),
});

export const CONDITIONAL_FORMAT_RULE_TYPE: Type<sheets_v4.Schema$ConditionalFormatRule> =
    hasPropertiesType({
      booleanRule: optionalType(BOOLEAN_RULE_TYPE),
      gradientRule: optionalType(GRADIENT_RULE_TYPE),
      ranges: optionalType(arrayOfType(GRID_RANGE_TYPE)),
    });

export const DIMENSION_GROUP_TYPE: Type<sheets_v4.Schema$DimensionGroup> = hasPropertiesType({
  collapsed: optionalType(nullableType(booleanType)),
  depth: optionalType(nullableType(numberType)),
  range: optionalType(DIMENSION_RANGE_TYPE),
});

export const DIMENSION_PROPERTIES_TYPE: Type<sheets_v4.Schema$DimensionProperties> =
    hasPropertiesType({
      developerMetadata: optionalType(arrayOfType(DEVELOPER_METADATA_TYPE)),
      hiddenByFilter: optionalType(nullableType(booleanType)),
      hiddenByUser: optionalType(nullableType(booleanType)),
      pixelSize: optionalType(nullableType(numberType)),
    });

export const EDITORS_TYPE: Type<sheets_v4.Schema$Editors> = hasPropertiesType({
  domainUsersCanEdit: optionalType(nullableType(booleanType)),
  groups: optionalType(nullableType(arrayOfType(stringType))),
  users: optionalType(nullableType(arrayOfType(stringType))),
});

export const GRID_COORDINATE_TYPE: Type<sheets_v4.Schema$GridCoordinate> = hasPropertiesType({
  columnIndex: optionalType(nullableType(numberType)),
  rowIndex: optionalType(nullableType(numberType)),
  sheetId: optionalType(nullableType(numberType)),
});

export const ROW_DATA_TYPE: Type<sheets_v4.Schema$RowData> = hasPropertiesType({
  values: optionalType(arrayOfType(CELL_DATA_TYPE)),
});

export const GRID_DATA_TYPE: Type<sheets_v4.Schema$GridData> = hasPropertiesType({
  columnMetadata: optionalType(arrayOfType(DIMENSION_PROPERTIES_TYPE)),
  rowData: optionalType(arrayOfType(ROW_DATA_TYPE)),
  rowMetadata: optionalType(arrayOfType(DIMENSION_PROPERTIES_TYPE)),
  startColumn: optionalType(nullableType(numberType)),
  startRow: optionalType(nullableType(numberType)),
});

export const OVERLAY_POSITION_TYPE: Type<sheets_v4.Schema$OverlayPosition> = hasPropertiesType({
  anchorCell: optionalType(GRID_COORDINATE_TYPE),
  heightPixels: optionalType(nullableType(numberType)),
  offsetXPixels: optionalType(nullableType(numberType)),
  offsetYPixels: optionalType(nullableType(numberType)),
  widthPixels: optionalType(nullableType(numberType)),
});

export const EMBEDDED_OBJECT_POSITION_TYPE: Type<sheets_v4.Schema$EmbeddedObjectPosition> =
    hasPropertiesType({
      newSheet: optionalType(nullableType(booleanType)),
      overlayPosition: optionalType(OVERLAY_POSITION_TYPE),
      sheetId: optionalType(nullableType(numberType)),
    });

export const EMBEDDED_CHART_TYPE: Type<sheets_v4.Schema$EmbeddedChart> = hasPropertiesType({
  chartId: optionalType(nullableType(numberType)),
  position: optionalType(EMBEDDED_OBJECT_POSITION_TYPE),
  spec: optionalType(CHART_SPEC_TYPE),
});

export const FILTER_VIEW_TYPE: Type<sheets_v4.Schema$FilterView> = hasPropertiesType({
  criteria: optionalType(nullableType(stringRecordType(FILTER_CRITERIA_TYPE))),
  filterViewId: optionalType(nullableType(numberType)),
  namedRangeId: optionalType(nullableType(stringType)),
  range: optionalType(GRID_RANGE_TYPE),
  sortSpecs: optionalType(arrayOfType(SORT_SPEC_TYPE)),
  title: optionalType(nullableType(stringType)),
});

export const ITERATIVE_CALCULATION_SETTINGS_TYPE
    : Type<sheets_v4.Schema$IterativeCalculationSettings> = hasPropertiesType({
      convergenceThreshold: optionalType(nullableType(numberType)),
      maxIterations: optionalType(nullableType(numberType)),
    });

export const NAMED_RANGE_TYPE: Type<sheets_v4.Schema$NamedRange> = hasPropertiesType({
  name: optionalType(nullableType(stringType)),
  nameRangeId: optionalType(nullableType(stringType)),
  range: optionalType(GRID_RANGE_TYPE),
});

export const PROTECTED_RANGE_TYPE: Type<sheets_v4.Schema$ProtectedRange> = hasPropertiesType({
  description: optionalType(nullableType(stringType)),
  editors: optionalType(EDITORS_TYPE),
  namedRangeId: optionalType(nullableType(stringType)),
  protectedRangeId: optionalType(nullableType(numberType)),
  range: optionalType(GRID_RANGE_TYPE),
  requestingUserCanEdit: optionalType(nullableType(booleanType)),
  unprotectedRanges: optionalType(arrayOfType(GRID_RANGE_TYPE)),
  warningOnly: optionalType(nullableType(booleanType)),
});

export const SPREADSHEET_PROPERTIES_TYPE: Type<sheets_v4.Schema$SpreadsheetProperties> =
    hasPropertiesType({
      autoRecalc: optionalType(nullableType(stringType)),
      defaultFormat: optionalType(CELL_FORMAT_TYPE),
      iterativeCalculationSettings: optionalType(ITERATIVE_CALCULATION_SETTINGS_TYPE),
      locale: optionalType(nullableType(stringType)),
      timeZone: optionalType(nullableType(stringType)),
      title: optionalType(nullableType(stringType)),
    });

export const SHEET_TYPE: Type<sheets_v4.Schema$Sheet> = hasPropertiesType({
  bandedRanges: optionalType(arrayOfType(BANDED_RANGE_TYPE)),
  basicFilter: optionalType(BASIC_FILTER_TYPE),
  charts: optionalType(arrayOfType(EMBEDDED_CHART_TYPE)),
  columnGroups: optionalType(arrayOfType(DIMENSION_GROUP_TYPE)),
  conditionalFormats: optionalType(arrayOfType(CONDITIONAL_FORMAT_RULE_TYPE)),
  data: optionalType(arrayOfType(GRID_DATA_TYPE)),
  developerMetadata: optionalType(arrayOfType(DEVELOPER_METADATA_TYPE)),
  filterViews: optionalType(arrayOfType(FILTER_VIEW_TYPE)),
  merges: optionalType(arrayOfType(GRID_RANGE_TYPE)),
  properties: optionalType(SPREADSHEET_PROPERTIES_TYPE),
  protectedRanges: optionalType(arrayOfType(PROTECTED_RANGE_TYPE)),
  rowGroups: optionalType(arrayOfType(DIMENSION_GROUP_TYPE)),
});

export const SPREADSHEET_TYPE: Type<sheets_v4.Schema$Spreadsheet> = hasPropertiesType({
  developerMetadata: optionalType(arrayOfType(DEVELOPER_METADATA_TYPE)),
  namedRanges: optionalType(arrayOfType(NAMED_RANGE_TYPE)),
  properties: optionalType(SPREADSHEET_PROPERTIES_TYPE),
  sheets: optionalType(arrayOfType(SHEET_TYPE)),
  spreadsheetId: optionalType(nullableType(stringType)),
  spreadsheetUrl: optionalType(nullableType(stringType)),
});
