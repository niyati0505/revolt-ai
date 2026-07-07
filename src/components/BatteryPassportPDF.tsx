import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#F4F8FC",
    fontSize: 12,
    fontFamily: "Helvetica",
  },

  header: {
    backgroundColor: "#0F172A",
    padding: 18,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#CBD5E1",
    marginTop: 4,
    fontSize: 11,
  },

  section: {
    marginTop: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    border: "1 solid #D1D5DB",
  },

  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#0F172A",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  label: {
    color: "#64748B",
  },

  value: {
    fontWeight: "bold",
  },

  footer: {
    marginTop: 35,
    textAlign: "center",
    color: "#64748B",
    fontSize: 10,
  },
});

export default function BatteryPassportPDF({
  battery,
}: {
  battery: any;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

  <View style={styles.header}>

    <Text style={styles.title}>
      REVOLT AI
    </Text>

    <Text style={styles.subtitle}>
      Digital Battery Passport
    </Text>

  </View>

    <View
  style={{
    marginTop: 20,
    borderTop: "1 solid #CBD5E1",
    paddingTop: 10,
  }}
>

<Text>
Certificate Number

</Text>

<Text
style={{
fontWeight:"bold"
}}
>
BP-{battery.batteryId}
</Text>

</View>
  <View style={styles.card}>

  <Text style={styles.heading}>
    Owner Information
  </Text>

  <View style={styles.row}>
    <Text style={styles.label}>Owner</Text>
    <Text style={styles.value}>{battery.owner}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Installation Date</Text>
    <Text style={styles.value}>{battery.installationDate}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Manufacture Date</Text>
    <Text style={styles.value}>{battery.manufactureDate}</Text>
  </View>

</View>

  <View style={styles.card}>

    <Text style={styles.heading}>
      Vehicle Information
    </Text>

    <View style={styles.row}>
      <Text style={styles.label}>Vehicle</Text>
      <Text style={styles.value}>{battery.vehicle}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Battery ID</Text>
      <Text style={styles.value}>{battery.batteryId}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Manufacturer</Text>
      <Text style={styles.value}>{battery.manufacturer}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Battery Type</Text>
      <Text style={styles.value}>{battery.batteryType}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Capacity</Text>
      <Text style={styles.value}>{battery.batteryCapacity}</Text>
    </View>

  </View>

  <View style={styles.card}>

    <Text style={styles.heading}>
      Battery Health
    </Text>
    <View
  style={{
    marginTop: 10,
    height: 12,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
  }}
>
  <View
    style={{
      width: `${battery.batteryHealth}%`,
      height: 12,
      backgroundColor:
        battery.batteryHealth >= 90
          ? "#22C55E"
          : battery.batteryHealth >= 75
          ? "#FACC15"
          : "#EF4444",
      borderRadius: 10,
    }}
  />
</View>

    <View style={styles.row}>
      <Text style={styles.label}>Battery Health</Text>
      <Text style={styles.value}>
        {battery.batteryHealth}%
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>SOH</Text>
      <Text style={styles.value}>{battery.soh}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>SOC</Text>
      <Text style={styles.value}>{battery.soc}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Charge Cycles</Text>
      <Text style={styles.value}>
        {battery.chargeCycles}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>AI Grade</Text>
      <Text style={styles.value}>
        {battery.aiGrade}
      </Text>
    </View>

    <View style={styles.card}>

  <Text style={styles.heading}>
    Charging Statistics
  </Text>

  <View style={styles.row}>
    <Text style={styles.label}>Fast Charging</Text>
    <Text style={styles.value}>{battery.fastCharging}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Slow Charging</Text>
    <Text style={styles.value}>{battery.slowCharging}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Temperature</Text>
    <Text style={styles.value}>{battery.temperature}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Voltage</Text>
    <Text style={styles.value}>{battery.voltage}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Current</Text>
    <Text style={styles.value}>{battery.current}</Text>
  </View>

</View>

  </View>

  <View style={styles.card}>

    <Text style={styles.heading}>
      AI Battery Analysis
    </Text>

    <Text>
      • Battery health is {battery.batteryStatus}.
    </Text>

    <Text>
      • Remaining life: {battery.remainingLife}
    </Text>

    <Text>
      • Estimated range: {battery.estimatedRange}
    </Text>

    <Text>
      • Charging efficiency: {battery.chargingEfficiency}
    </Text>

    <Text>
      • Warranty: {battery.warrantyStatus}
    </Text>

  </View>
  <View style={styles.card}>

  <Text style={styles.heading}>
    Warranty Details
  </Text>

  <View style={styles.row}>
    <Text style={styles.label}>Status</Text>
    <Text style={styles.value}>{battery.warrantyStatus}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Expiry</Text>
    <Text style={styles.value}>{battery.warrantyExpiry}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.label}>Next Service</Text>
    <Text style={styles.value}>{battery.nextService}</Text>
  </View>

</View>

  <View style={styles.card}>

    <Text style={styles.heading}>
      Recommendations
    </Text>

    {battery.recommendations.map(
      (item: string, index: number) => (
        <Text key={index}>
          • {item}
        </Text>
      )
    )}

  </View>


<View
style={{
marginTop:20,
padding:12,
backgroundColor:"#DCFCE7",
borderRadius:8
}}
>

<Text
style={{
color:"#15803D",
fontWeight:"bold"
}}
>

✓ VERIFIED BY REVOLT AI

</Text>

<Text>

This Battery Passport has been
verified using AI Battery Analytics.

</Text>

</View>

  <Text style={styles.footer}>
    Generated by REVOLT AI

    {"\n"}

    Digital Battery Passport

    {"\n"}

    {battery.lastScan}
  </Text>

</Page>
    </Document>
  );
}