import React from 'react';
import { View, Text, Pressable, TextInput, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing } from '../theme';

export function Screen({ children, scroll = true, edges = ['left', 'right', 'bottom'], style }) {
  const body = scroll ? (
    <ScrollView contentContainerStyle={[s.scroll, style]} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  ) : (
    <View style={[s.scroll, style]}>{children}</View>
  );
  return (
    <SafeAreaView style={s.screen} edges={edges}>
      {body}
    </SafeAreaView>
  );
}

// To use your own logo: put it in assets/logo.png and swap this for an <Image source={require('../../assets/logo.png')} />.
export function Logo({ size = 28 }) {
  return (
    <View>
      <Text style={{ color: colors.blue, fontSize: size, fontWeight: '900', letterSpacing: 1 }}>NEXT LEVEL</Text>
      <Text style={{ color: colors.green, fontSize: size * 0.45, fontWeight: '700', letterSpacing: 2 }}>GAMING & ESPORTS ARENA</Text>
    </View>
  );
}

export function Heading({ children, style }) {
  return <Text style={[s.heading, style]}>{children}</Text>;
}

export function Body({ children, style }) {
  return <Text style={[s.body, style]}>{children}</Text>;
}

export function Button({ title, onPress, variant = 'primary', icon, disabled, style }) {
  const primary = variant === 'primary';
  const fg = primary ? colors.bg : colors.blue;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        s.button,
        primary ? s.buttonPrimary : s.buttonOutline,
        pressed && { opacity: 0.8 },
        disabled && { opacity: 0.4 },
        style,
      ]}
    >
      {icon ? <Ionicons name={icon} size={18} color={fg} style={{ marginRight: 8 }} /> : null}
      <Text style={[s.buttonText, { color: fg }]}>{title}</Text>
    </Pressable>
  );
}

export function Card({ children, style, onPress }) {
  const Wrapper = onPress ? Pressable : View;
  return (
    <Wrapper onPress={onPress} style={[s.card, style]}>
      {children}
    </Wrapper>
  );
}

export function IconBadge({ name, color = colors.blue, size = 24 }) {
  return (
    <View style={[s.badge, { borderColor: color }]}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}

export function Chip({ label, selected, onPress, style }) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" style={[s.chip, selected && s.chipOn, style]}>
      <Text style={[s.chipText, selected && { color: colors.bg }]}>{label}</Text>
    </Pressable>
  );
}

export function Field({ label, error, style, ...props }) {
  return (
    <View style={{ marginBottom: spacing.md }}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.muted}
        style={[s.input, error && { borderColor: colors.danger }, style]}
        {...props}
      />
      {error ? <Text style={s.error}>{error}</Text> : null}
    </View>
  );
}

export function Stepper({ value, onChange, min = 0, max = 99 }) {
  return (
    <View style={s.stepper}>
      <Pressable onPress={() => onChange(Math.max(min, value - 1))} style={s.stepBtn} accessibilityLabel="Decrease">
        <Ionicons name="remove" size={18} color={colors.text} />
      </Pressable>
      <Text style={s.stepValue}>{value}</Text>
      <Pressable onPress={() => onChange(Math.min(max, value + 1))} style={s.stepBtn} accessibilityLabel="Increase">
        <Ionicons name="add" size={18} color={colors.text} />
      </Pressable>
    </View>
  );
}

export function Row({ label, value, bold, color }) {
  return (
    <View style={s.row}>
      <Text style={[s.body, bold && { color: colors.text, fontWeight: '800' }]}>{label}</Text>
      <Text style={[s.body, { color: color || colors.text }, bold && { fontWeight: '800', fontSize: 18 }]}>{value}</Text>
    </View>
  );
}

export function EmptyState({ title, text, children }) {
  return (
    <Card style={{ alignItems: 'center', paddingVertical: spacing.xl }}>
      <Ionicons name="game-controller-outline" size={40} color={colors.purple} />
      <Heading style={{ marginTop: spacing.md, textAlign: 'center' }}>{title}</Heading>
      <Body style={{ textAlign: 'center', marginBottom: spacing.md }}>{text}</Body>
      {children}
    </Card>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: spacing.md, paddingBottom: spacing.xl },
  heading: { color: colors.text, fontSize: 20, fontWeight: '800', marginBottom: spacing.sm },
  body: { color: colors.muted, fontSize: 14, lineHeight: 20 },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, paddingHorizontal: 20, borderRadius: radius.md, marginTop: spacing.sm },
  buttonPrimary: { backgroundColor: colors.green, shadowColor: colors.green, shadowOpacity: 0.5, shadowRadius: 10, shadowOffset: { width: 0, height: 0 }, elevation: 6 },
  buttonOutline: { borderWidth: 1.5, borderColor: colors.blue },
  buttonText: { fontSize: 15, fontWeight: '800' },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.md },
  badge: { width: 48, height: 48, borderRadius: radius.md, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surfaceAlt },
  chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surfaceAlt, marginRight: spacing.sm, marginBottom: spacing.sm },
  chipOn: { backgroundColor: colors.blue, borderColor: colors.blue },
  chipText: { color: colors.text, fontSize: 13, fontWeight: '600' },
  label: { color: colors.text, fontSize: 13, fontWeight: '700', marginBottom: 6 },
  input: { backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, color: colors.text, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15 },
  error: { color: colors.danger, fontSize: 12, marginTop: 4 },
  stepper: { flexDirection: 'row', alignItems: 'center' },
  stepBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  stepValue: { color: colors.text, fontSize: 16, fontWeight: '800', minWidth: 34, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6 },
}); 
